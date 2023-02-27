// const {b, c ,test_funkcija} = require("./text_convert.js")

// console.log(test_funkcija(b,c));


const {firstLetterUpperCase, textStats }= require("./text_convert.js");

text1 = "zdravp svetu"
console.log(textStats.firstLetterUpperCase(text1));

let primer_text = "Zdravo Zhivko. Kako si ? Gledam deka te nema na predavanja. Si se zapustil!";
console.log(textStats(primer_text));