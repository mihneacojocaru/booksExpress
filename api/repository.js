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