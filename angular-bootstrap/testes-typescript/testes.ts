let idade : number = 24;
let nome : string = "Wellington";

console.log(`Olá, ${nome}. Você tem ${idade} anos.`);

let palavra : string = "Wellington";
let outraPalavra : string = "Wellington";

if(palavra === outraPalavra){
    console.log("Iguais");
}
else{
    console.log("Diferentes");
}

//Declarando array
let numerosArray : Array<number> = [1];
numerosArray[0] = 12;

//Outra forma de declarar um array
let array : number[] = [];
array[0] = 11;

console.log(numerosArray[0]);
console.log(array[0]);

//Não necessariamente por ordem, apenas aceitas os tipos passados
let arrayMultiplosTipos : Array<number | string> = [1, "oi", "Welz1n", 5, 2123, 2.00];

//Outra forma de declarar um array
//Não necessariamente por ordem, apenas aceitas os tipos passados
let arrayVariosTipos : (string | number)[] = [11, "seila"];

console.log(arrayMultiplosTipos[2]);
console.log(arrayVariosTipos[1]);

//Ler array todo
console.log(arrayVariosTipos);

//Métodos do array
console.log(arrayMultiplosTipos.pop());
console.log(arrayMultiplosTipos.push(123123));

let lastIndex : number = arrayMultiplosTipos.length -1;
console.log(arrayMultiplosTipos[lastIndex]);

//Ordena pela ordem de tipos declarados no Array.
// Ex: primeiro as strings e dps os numbers
console.log(arrayMultiplosTipos.sort());

console.log(arrayMultiplosTipos.join());

//Enum
enum Fumos {
    Strong,
    Cherrybomb,
    Tangerbomb
}

console.log(Fumos);

enum Celulares {
    Iphone = 10,
    Samsung,
    Xiaomi
}

console.log(Celulares);
console.log(Celulares[12]);

enum Celular {
    Iphone = "Iphone 12 pro max",
    Samsung = "Galaxy A80",
    Xiaomi = "Mi Note 9"
}

console.log(Celular.Iphone);