// console.log("Zdravo svetu");
// console.log(5!=5);
// console.log(typeof 25);

// const chovek = {
// name:"John",
// surname: "Doe"
// };

// console.log(chovek);
// a =10;
// console.log(a);
// a=12;
// console.log(a);
// // const b = 15;
// // console.log(b);

// // let niza = [1, true , 2.5 , "zdravo"]
// // console.log(niza);

// let student = {
//     ime:"Pero",
//     prezime:"Nakov",
//     age:25

// };
// console.log(student);

// student.prezime = "Perovski";

// student = {
//     prezime : "Perovski"
// };
// console.log(student);

// function testFn(){
//     return "Test fn initiated";

// console.log(testFn())
// let  test_fntestFn();

// const testFn1 = () => {
//     console.log("test fn1");
// }

// testFn1();

// const testFn2 = (b, a = 25) => {
//     return a + b;
// }
// console.log(testFn2(50));

const testFn3 = (o = {}) => {
    o.ime = "Zhivko"
    console.log(o);
}

const s = { ime: "zlate", prezime: "zlatevski" };
testFn3(s);
// console.log(o);
console.log(s);

let ucenik = { ime: "marko", ocena: 4 };
let ucenik2 = ucenik;

console.log(ucenik);
ucenik2.ime = "vlado";
console.log(ucenik);
console.log(ucenik2);

const convert = (type, value) => {

    switch (type) {
        case "c2f":
            return value * 9 / 5 + 32;
        case "f2c":
            return (value - 32) * 5 / 9;
        default:
            console.log("cannot convert")
            break;

    }

}

let temp = 25;
console.log(convert("c2f", temp));
let res = convert("p2p", temp);
console.log(res);

// definirajte dva objekti na ucenici
// da imaat ime , prezime , ocenka
// dokolku prviot ucenik ima pogolema ocena od vtoriot
// pecatete "<ime na prv ucenik> <prezime na prv ucenik>" e podobar od <ime na vtor ucenik
// dokolku e obratno ispecatae go obratno
// dokolku se isti ispecatete <ucenik1> ima isto znaenje kako i <ucenik2>


const ucenikprv = { ime: "Prvko",prezime:"Prvakovski" ocena: 5 };
const ucenikvtor = {ime:"Vtornik", prezime:"Nedelkovski" ocena:1};

if(ucenikprv.ocena > ucenikvtor.ocena) {
    console.log(`${ucenikprv.ime} ${ucenikprv.prezime}e podobar od `${ucenikvtor.prezime})
}
