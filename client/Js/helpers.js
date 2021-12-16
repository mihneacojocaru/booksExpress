export const checkBookTitle = (text) => {
  
    let btRegex = /^.+$/g;
    if(text.match(btRegex) == null || text.match(btRegex) == ' '){
        return 'Book Title cannot be empty';
    }else{
        console.log(text.match(btRegex));
        return text;
    }
};

export function checkAuthor(text){

    let authorRegex = /^([A-Za-z]+)\s([A-Za-z]+)$/g;

    if(text.match(authorRegex) == null){
        return 'Author name must have the form "LastName FirstName"!'
    }else{
        console.log(text);
        return text;
    }

}

export function checkDate(text){
    let dateRegex = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/g;

    if(text.match(dateRegex) == null){
        return 'Please fill out a valid date';
    }else{
        let d = text;
        d = d.split('-');
        let newD = `${d[2]}/${d[1]}/${d[0]}`;
        return newD;
    }
}

export function checkISBN(text){
    let isbnRegex = /^\d{9}\-(\X|[0-9])$/g;

    if(text.match(isbnRegex) == null){
        return 'ISBN Number must have the form: 123456789-0';
    }else{
        return text;
    }
}


//let btRegex = /^.+$/g;
//let authorRegex = /^([A-Za-z]+)\s([A-Za-z]+)$/g;
//let dateRegex = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/g;
//let isbnRegex = /^\d{9}\-(\X|[0-9])$/g;

            
//             if(bookTitle.value.trim().match(btRegex) !== null){
//                 this.book.book_title = bookTitle.value.trim();   
//             } else{
//                 alert("Please input the book title!")
//             }
//             if(author.value.trim().match(authorRegex) !== null){
//                 this.book.author = author.value.trim();
//             }else{
//                 alert('Please input the author`s first and last name!');
//             }
//             if(releaseDate.value.match(dateRegex) !== null){
//                 let d = releaseDate.value;
//                 d = d.split('-');
//                 let newD = `${d[2]}/${d[1]}/${d[0]}`;
//                 this.book.release_date = newD;
//             }else{
//                 alert('Please select a date!');
//             }
//             if(isbn.value.match(isbnRegex) !== null){
//                 this.book.isbn_no = isbn.value.trim();
//             }else{
//                 alert('Please enter a valid ISBN!');
//             }

//             console.log(this.book);
            
//             // if(this.book.book_title.match(btRegex) !== false &&
//             // this.book.author.match(authorRegex) !== false &&
//             // this.book.release_date !== "" &&
//             // this.book.isbn_no.match(isbnRegex) !== ""
//             // ){
//             //     const dataApi = new Data();
//             //     await dataApi.addNewBook(this.book);
//             //     this.addNewBookFunction();

//             // }else{
//             //     alert("Something went wrong!");
//             // }