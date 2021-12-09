import fs from 'fs'


export const getBooks=()=>{

    return new Promise ((resolve,reject)=>{

         fs.readFile('data.json','utf-8',(err,data)=>{

            if(err){
                reject(err);
            }else{
                const da=JSON.parse(data);
                resolve(da);            
            }
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

export const newBookList =  async (book) => {

    try{

        let books = await getBooks();

        let newBook = {id:nextBookId(books),...book} 
        
        books.push(newBook);

        await saveBook(books);

    }catch(e){
        console.warn(e);
    }
     
}

export const nextBookId = list => {

    let idList = [];

    list.forEach( e => {
        idList.push(e.id);
    })

    return idList.pop() + 1;
}

export const deleteBook = async id => {

    try {
        let books = await getBooks();

        books = books.filter(e=>e.id!=id);

        await saveBook(books);

    } catch (error) {
        console.warn(e);
    }

}

export const updateBook = async book => {
    try {
        let books = await getBooks();

        for(let i=0; i<books.length; i++){
            if(books[i].id==book.id){
                books[i] = book; 
            }
        }
       
        await saveBook(books);

    } catch (error) {
        console.warn(error);
    }
}







//