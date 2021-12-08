import fs from 'fs'


export const getBooks=()=>{

    return new Promise ((resolve,reject)=>{


         fs.readFile('data.json','utf-8',(err,data)=>{


            if(err){
                reject(err);
            }else{
                const da=JSON.parse(data);
                resolve(da);            }
         })

    })
}

export const saveBook=(data)=>{

     return new Promise((resolve,reject)=>{

        fs.writeFile('data.json',JSON.stringify(data,null,2),(err)=>{
            if(err){
                reject(err);
            }else{
                resolve("am reusit");
            }
        })
     })
}


//TODO Get new book, Get all books, create new ID, set the new ID to the new book, 
//TODO add new book to existing books, return new book list.

export const newBookList =  async (book) => {

    try{

        let books=await getBooks();

        books.push(book);
        

        await saveBook(books);


    }catch(e){
        console.warn(e);
    }
     
}

export const nextBookId = async () => {
    try {
        let books = await getBooks();

        let idList = [];

        books.forEach(element => {
            idList.push(element.id);
        });

        console.log(idList.pop());
    } catch (error) {
        console.warn(error);
    }
}

nextBookId();









//