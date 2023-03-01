// // const path = require("path");

// // // Get the base filnemae

// // console.log(__filename);
// // console.log(path.basename(__filename));

// // __filename.split(__filename.split("\\")[__filename.split("\\").length -1]);


// // console.log(path.dirname(__filename));
// // console.log(__dirname);

// // console.log(path.extname(__filename));


// // console.log(path.parse(__filename));

// // console.log(path.parse(__filename).ext);

// // console.log(path.join(__dirname, "test", "hello.html"));

// const { fail } = require("assert");
// const fs = require("fs");
// const path = require("path");

const fileWrite = (filename , data) => {
    return new Promise((success , fail)=>{
        fs.writeFile(filename, data, err=>{
            if (err) return fail(err);
            return success();
            
        });
    });
};
// fileWrite(path.join(__dirname, "test", "ocenki.txt"),"4,5,3,2,1,5") 
//     .then(()=>{//then== success
//         console.log("success");
//         return fileWrite(path.join(__dirname, "test", "boti.txt"),"crvena , zolta");
//     }).then(()=>{//then == success
//         console.log("success 2 !!!")
//         return fileWrite(path.join(__dirname, "test","boi2.txt"),"druga , epten druga , breee")
//     }).catch(err =>{
//         console.log(err);
//     });

    const fs = require('fs');
const { join } = require('path');
const path = require('path');

    function readFilePromise(filename) {
      return new Promise((resolve, reject) => {
        fs.readFile(filename, 'utf8', (error, data) => {
          if (error) {
            reject(error);
          } else {
            resolve(data);
          }
        });
      });
    };

    let imenik = [
      {ime: "Zlate Zlatevski", telefon:555666},
      {ime: "Nekoj Nekojsi", telefon:111666},
      {ime: "Bree Breeeee", telefon:222666},
    ]

  (async()=> {
    try {
        let imenikData = JSON.stringify(imenik); //convert object to string
        console.log(imenikData);
        await fileWrite(path.join(__dirname,"test1", "imenik.txt"), imenikData);
        let dataString = await fileRead(path.join(__dirname , "test1", "imenik.txt"));
        let data = JSON.parse(dataString);
    } catch(err) {
      console.log(err);
    }

  })();