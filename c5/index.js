const fs = require("fs");

const fileRead = (filename ) => {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, "utf8",(err, data)=> {
            if (err) return reject (err);
            return resolve(data);
        });
    });
};

(async() => {
    try {
        let dataString = await fileRead("studenti.json");
        let studenti = JSON.parse(dataString);
        console.log(studenti);

        let prosek = [...studenti.sort((a, b) => {
            if (a.prosek > b.prosek) {
                return -1;
            } else if (a.prosek < b.prosek){
                return 1;
            }

            return 0;
        })];

        let sortIme = [...studenti.sort((a, b) =>{
            if (a.ime.charAt(0) > b.ime.charAt(0)) {
                return 1;
            } else if (a.ime.charAt(0) < b.ime.charAt(0)) {
                return -1;
            }
            return 0;
        })]

        console.log(prosek);
        console.log(sortIme);

        let najnizokProsek = prosek[prosek.length -1];
        let najvisokProsek = prosek[0];
        let vkupenProsek = studenti.reduce((prev, cur)=>{
            return cur.prosek + prev;

        },0);
        let sredenProsek = vkupenProsek / studenti.length;
        console.log(sredenProsek / studenti.length);
    }
    catch(err) {
        console.log(err);
    }
})();

