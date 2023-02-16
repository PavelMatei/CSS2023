import salutAAA, {add,inm} from './main.js';
let x = 10;
let y = 15;
let suma = add(x,y);
let produs = inm(x,y);
function salut(m){
    console.log('Salut ' + m);
}
console.log(`Suma numerelor este ${x} si ${y} este`, suma);
console.log(`Produsul numerelor este ${x} si ${y} este`, produs);
let buna=salut('Ion');
console.log(buna);
let sal =salutAAA('Vasile');
console.log(sal)