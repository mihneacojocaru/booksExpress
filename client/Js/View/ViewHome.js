import Data from "../data.js";

export default class ViewHome{

    constructor(){
        this.root = document.getElementById('root');
        this.root.innerHTML = "";
        this.root.innerHTML += this.nav();
        this.root.innerHTML += this.menu();
        this.content = document.querySelector(".content");
        this.navItems = document.querySelector(".nav-items");
        this.navItems.addEventListener("click", this.selectorHandler);
        this.home = document.getElementById("home");
        this.home.addEventListener("click", this.selectorHandler);
        this.tBody

    }

    selectorHandler = async e => {
        e.preventDefault();
        const obj = e.target;
        if(obj.className == "allBooks"){
            this.content.innerHTML = "";
            this.content.innerHTML = this.allBooks();
            this.tBody = document.querySelector('.allBooksBody');

            const allBooks = await this.getBooks();
           
            allBooks.forEach(element => {
                this.addBooksToPage(element);
            });

        } else if(obj.className == "manageLibrary"){
            this.manageLibraryFunction();

            this.tBody.addEventListener("click",this.deleteBook);

        } else if(obj.className == "addNewBook"){
            this.content.innerHTML = "";
            this.content.innerHTML = this.addNewBook();
        } else if(obj.className == "settings"){
            this.content.innerHTML = "";
            this.content.innerHTML = this.settings();
        }else if(obj.className == "about"){
            this.content.innerHTML = "";
            this.content.innerHTML = this.about();
        }else if(obj.id == "home"){
            this.content.innerHTML = "";
            this.content.innerHTML = this.main();
        }
    }

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

    addNewBook = () => {
        return `
                <h2>Add new book</h2>
                <div class="addForm">
                    <form>
                        <label for="bookTitle">Book Title</label>
                        <input type="text" id="bookTitle" name="bookTitle" placeholder="Book Title..">

                        <label for="author">Author</label>
                        <input type="text" id="author" name="lastname" placeholder="Author name..">

                        <label for="releaseDate">Release Date</label>
                        <input type="date" id="releaseDate">

                        <label for="isbn">ISBN</label>
                        <input type="text" id="isbn" name="isbn" placeholder="Enter ISBN..">
                    
                        <input type="submit" value="Add Book">
                    </form>
                </div>
                `;
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

    //+++ Frontend Functions

    manageLibraryFunction = async () =>{
        console.log("aici")
            this.content.innerHTML = "";
            this.content.innerHTML = this.manageLibrary();

            this.tBody = document.querySelector('.allBooksBody');

            const allBooks = await this.getBooks();
           
            this.tBody.innerHTML = "";

            allBooks.forEach(element => {
                this.addBooks2(element);
            });
    }

    //+++ API Functions

    addBooksToPage = (object) => {
        
        let tRow = `<tr>
                        <td>${object.id}</td>
                        <td>${object.book_title}</td>
                        <td>${object.author}</td>
                        <td>${object.release_date}</td>
                        <td>${object.isbn_no}</td>
                    </tr>`;
        this.tBody.innerHTML += tRow;
    }

    addBooks2 = (obj) => {
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

    getBooks = async () => {
        const getBooks = new Data();
        const books = await getBooks.getBooks();

        return books;
    }

    deleteBook = async (e) => {
        let obj = e.target
        if(obj.id == "btnDelete"){
            let bookID = obj.parentElement.parentElement.children[0].textContent;
            const dataApi = new Data();
            await dataApi.deleteBookApi(bookID);
            this.manageLibraryFunction();
            //todo delete
            
        }

    }
}