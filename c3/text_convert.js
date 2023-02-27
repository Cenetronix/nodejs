// const b = 25;
// let c = 32;

// const test_funkcija = (a, b) => {
//     return a+b;
// }

// module.exports = {
//     b,
//     c,
//     test_funkcija,
// };

// // module.exports = 

text1 = "Zdrav razbiras"

const firstLetterUpperCase = (text) => {
    return text = text.charAt(0).toUpperCase() + text.slice(1, text.lenght);



};

const textStats = (text) => {
    if (typeof text !== "string") return;

    let output = {
        bukvi: 0,
        zborovi: 0,
        rechenici: 0,
        povekeOd5: 0,
        pomalkuOd5: 0,
    };

    output.bukvi = text.length;
    output.zborovi = text.split(" ").length;
    output.rechenici = text.split(".").length;

    let zborovi = text.split(" ");
    for (let zbor of zborovi) {
        if (zbor.lenght === 5) output.ednakvoNa5++;
        if (zbor.lenght > 5) output.povekeOd5++;
        if (zbor.lenght < 5) output.pomalkuOd5++;
        }


}

module.exports = {
    firstLetterUpperCase,
    textStats
};

