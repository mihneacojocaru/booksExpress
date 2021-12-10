import Data from "../data.js";

export default class ViewHome{

    constructor(){
        this.book = {};
        this.root = document.getElementById('root');
        this.root.innerHTML = "";
        this.root.innerHTML += this.nav();
        this.root.innerHTML += this.menu();
        this.content = document.querySelector(".content");
        this.navItems = document.querySelector(".nav-items");
        this.navItems.addEventListener("click", this.selectorHandler);
        this.home = document.getElementById("home");
        this.home.addEventListener("click", this.selectorHandler);
        this.tBody;
        
    }
//+++ Event Bubbling

    selectorHandler = async e => {
        e.preventDefault();
        const obj = e.target;
        if(obj.className == "allBooks"){
            this.allBooksFunction();
        } else if(obj.className == "manageLibrary"){
            this.manageLibraryFunction();
        } else if(obj.className == "addNewBook"){
            this.addNewBookFunction();
        } else if(obj.className == "settings"){
            this.settingsFunction();
        }else if(obj.className == "about"){
            this.aboutFunction();
        }else if(obj.id == "home"){
            this.homeFunction();
        }
    }

//+++ API Functions

    getBooks = async () => {
        const getBooks = new Data();
        const books = await getBooks.getBooks();
        return books;
    }

    deleteBook = async (e) => {
        let obj = e.target;
        if(obj.id == "btnDelete"){
            let bookID = obj.parentElement.parentElement.children[0].textContent;
            const dataApi = new Data();
            await dataApi.deleteBookApi(bookID);
            this.manageLibraryFunction();
        }

    }

    updateBook = async (e) => {
        let obj = e.target;
        if(obj.id == "btnUpdate"){
            let bookID = obj.parentElement.parentElement.children[0];
            let bookTitle = obj.parentElement.parentElement.children[1];
            let author = obj.parentElement.parentElement.children[2];
            let releaseDate = obj.parentElement.parentElement.children[3];
            let isbn = obj.parentElement.parentElement.children[4];

            this.book.id = parseInt(bookID.textContent);
            this.book.book_title = bookTitle.textContent;
            this.book.author = author.textContent;
            this.book.release_date = releaseDate.textContent;
            this.book.isbn_no = isbn.textContent;

            bookTitle.innerHTML = `<input id="title" class="updateInput" type="text" value="${this.book.book_title}"></input>`;
            author.innerHTML = `<input id="author" class="updateInput" type="text" value="${this.book.author}"></input>`;
            releaseDate.innerHTML = `<input id="rDate" class="updateInput" type="text" value="${this.book.release_date}"></input>`;
            isbn.innerHTML = `<input id="isbn" class="updateInput" type="text" value="${this.book.isbn_no}"></input>`;

            obj.textContent = "Save";
            obj.id = "btnSave";
        }else if(obj.id == "btnSave"){
            let inputTitle = document.getElementById('title');
            let author = document.getElementById('author');
            let rDate = document.getElementById('rDate');
            let isbn = document.getElementById('isbn');

            this.book.book_title = inputTitle.value.trim();
            this.book.author = author.value.trim();
            this.book.release_date = rDate.value.trim();
            this.book.isbn_no = isbn.value.trim();

            const dataApi = new Data();
            await dataApi.updateBookApi(this.book);
            this.manageLibraryFunction();
        }
    }

addBook = async (e)=>{
    
    e.preventDefault();
    let obj = e.target;

    if(obj.id == "submitBtn"){

        const bookTitle = document.getElementById('bookTitle');
        const author = document.getElementById('author');
        const releaseDate = document.getElementById('releaseDate');
        const isbn = document.getElementById('isbn');

        let btRegex = /^.+$/g;

        let authorRegex = /^([A-Za-z]+)\s([A-Za-z]+)$/g;

        let dateRegex = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/g;

        let isbnRegex = /^\d{9}\-(\X|[0-9])$/g;

        
        if(bookTitle.value.trim().match(btRegex) !== null){
            this.book.book_title = bookTitle.value.trim();
            
        } else{
            alert("Please input the book title!")
        }
        if(author.value.trim().match(authorRegex) !== null){
            this.book.author = author.value.trim();
        }else{
            alert('Please input the author`s first and last name!');
        }


        let d = releaseDate.value;
        d = d.split('-');
        let newD = `${d[2]}/${d[1]}/${d[0]}`;

        //this.book.book_title = bookTitle.value.trim();
        // this.book.author = author.value.trim();
        this.book.release_date = newD;
        this.book.isbn_no = isbn.value.trim();

        //console.log(this.book);

        // const dataApi = new Data();
        // await dataApi.addNewBook(this.book);
        // this.addNewBookFunction();
    }
    
}

    //+++ HTML Functions

    allBooksFunction = async () => {
        this.content.innerHTML = "";
        this.content.innerHTML = this.allBooks();
        this.tBody = document.querySelector('.allBooksBody');

        const allBooks = await this.getBooks();
        
        allBooks.forEach(element => {
            this.addToAllBooks(element);
        });
    }

    addToAllBooks = (object) => {
        
        let tRow = `<tr>
                        <td>${object.id}</td>
                        <td>${object.book_title}</td>
                        <td>${object.author}</td>
                        <td>${object.release_date}</td>
                        <td>${object.isbn_no}</td>
                    </tr>`;
        this.tBody.innerHTML += tRow;
    }


    manageLibraryFunction = async () =>{

        this.content.innerHTML = "";
        this.content.innerHTML = this.manageLibrary();
        this.tBody = document.querySelector('.allBooksBody');
        this.tBody.innerHTML = "";

        const allBooks = await this.getBooks();

        allBooks.forEach(element => {
            this.addToManageLibrary(element);
        });

        this.tBody.addEventListener("click",this.deleteBook);       
        this.tBody.addEventListener("click",this.updateBook);       
            
    }

    addToManageLibrary = (obj) => {
        let tRow = `<tr>
                        <td>${obj.id}</td>
                        <td>${obj.book_title}</td>
                        <td>${obj.author}</td>
                        <td>${obj.release_date}</td>
                        <td>${obj.isbn_no}</td>
                        <td>
                            <button id="btnUpdate">Update</button>
                            <button id="btnDelete">Delete</button>
                        </td>
                    </tr>`;
        this.tBody.innerHTML += tRow;
    } 

    addNewBookFunction = () => {
        this.content.innerHTML = "";
        this.content.innerHTML = this.addNewBookHtml();

        let addForm = document.querySelector('#addForm');
        addForm.addEventListener('click', this.addBook);
    }

    settingsFunction = () => {
        this.content.innerHTML = "";
        this.content.innerHTML = this.settings();
    }

    aboutFunction = () => {
        this.content.innerHTML = "";
        this.content.innerHTML = this.about();
    }

    homeFunction = () => {
        this.content.innerHTML = "";
        this.content.innerHTML = this.main();
    }


    //+++ HTML Content

    nav = ()=>{
        return `<nav>
                    <div class="title-img">
                        <img src="/Assets/Download.jpeg" alt="books">
                    </div>
                    <h1><a id="home" href="#">Books Express&trade;</a></h1>
                    <a href="#" class="toggle-btn">
                        <span class="bar"></span>
                        <span class="bar"></span>
                        <span class="bar"></span>
                    </a>
                    <ul class="nav-items">
                        <li class="allBooks">All Books</li>
                        <li class="manageLibrary">Manage Library</li>
                        <li class="addNewBook">Add New Book</li>
                        <li class="settings">Settings</li>
                        <li class="about">About</li>
                    </ul>
                </nav>`;
    }

    menu = () => {
        return `<main>
                    <div class="content">
                        <h2>Welcome to the Books Express App</h2>
                        <p>This app was made to showcase the use of a REST Api backend developed with NODE.js and Express framework</p></br>
                        <p>Please click on the links to navigate to the different sections of this web app</p>
                        </br>
                        <p>Enjoy!</p>
                    </div>
                </main>`;
    }

    main = () => {
        return `
                        <h2>Welcome to the Books Express App</h2>
                        <p>This app was made to showcase the use of a REST Api backend developed with NODE.js and Express framework</p></br>
                        <p>Please click on the links to navigate to the different sections of this web app</p>
                        </br>
                        <p>Enjoy!</p>
        `;
    }

    allBooks = () => {
        return `
                <h2>All Books</h2>
                <table>
                    <thead>
                        <th>Id</th>
                        <th>Book Title</th>
                        <th>Author</th>
                        <th>Release Date</th>
                        <th>ISBN</th>
                    </thead>
                    <tbody class="allBooksBody"></tbody>
                </table>
                `;
    }

    manageLibrary = () => {
        return `
        <h2>Manage Library</h2>
        <table>
            <thead>
                <th>Id</th>
                <th>Book Title</th>
                <th>Author</th>
                <th>Release Date</th>
                <th>ISBN</th>
                <th>Option</th>
            </thead>
            <tbody class="allBooksBody"></tbody>
        </table>
        `;
    }

    addNewBookHtml = () => {
        return `
                <h2>Add new book</h2>        
                <!--<div class="errMessage">
                    <h3>OOOPS!</h3>
                    <p>Book Title is required!</p>
                        <p>Author is required!</p>
                        <p>Release Date is required!</p>
                        <p>ISBN# is required!</p>
                </div>-->
                <div class="addForm">
                    <form id="addForm">
                        <label for="bookTitle">Book Title</label>
                        <input type="text" id="bookTitle" name="bookTitle" placeholder="Book Title.." required>

                        <label for="author">Author</label>
                        <input type="text" id="author" name="lastname" placeholder="Author name.." required>

                        <label for="releaseDate">Release Date</label>
                        <input type="date" id="releaseDate" required>

                        <label for="isbn">ISBN</label>
                        <input type="text" id="isbn" name="isbn" placeholder="Enter ISBN.." required>

                        <button id="submitBtn" type="submit">Add Book</button>
                        
                    </form>
                </div>
                `;

              //  <input id="submitBtn" type="submit" value="Add Book">
    }



    settings = () => {
        return `
        <h2>Settings</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio ea, neque sequi delectus tenetur maiores obcaecati rem cumque voluptatem autem earum numquam eveniet vitae, esse nisi, inventore reiciendis ut? Ab?</p>
        `;
    }

    about = () => {
        return `
                <h2>About</h2>
                <p>This is the about section</p>
                <img src="./Assets/books-bookstore-book-reading-159711.jpeg" alt="books-bookstore-book-reading-159711">
                `;
    }

    //--- Utilities

    debugLog = () => {
        const d = new Date();
        console.log('Here on: ' + d.toISOString());
    }
}