var idade = 24;
var nome = "Wellington";
console.log("Ol\u00E1, ".concat(nome, ". Voc\u00EA tem ").concat(idade, " anos."));
var palavra = "Wellington";
var outraPalavra = "Wellington";
if (palavra === outraPalavra) {
    console.log("Iguais");
}
else {
    console.log("Diferentes");
}
//Declarando array
var numerosArray = [1];
numerosArray[0] = 12;
//Outra forma de declarar um array
var array = [];
array[0] = 11;
console.log(numerosArray[0]);
console.log(array[0]);
//Não necessariamente por ordem, apenas aceitas os tipos passados
var arrayMultiplosTipos = [1, "oi", "Welz1n", 5, 2123, 2.00];
//Outra forma de declarar um array
//Não necessariamente por ordem, apenas aceitas os tipos passados
var arrayVariosTipos = [11, "seila"];
console.log(arrayMultiplosTipos[2]);
console.log(arrayVariosTipos[1]);
//Ler array todo
console.log(arrayVariosTipos);
//Métodos do array
console.log(arrayMultiplosTipos.pop());
console.log(arrayMultiplosTipos.push(123123));
var lastIndex = arrayMultiplosTipos.length - 1;
console.log(arrayMultiplosTipos[lastIndex]);
//Ordena pela ordem de tipos declarados no Array.
// Ex: primeiro as strings e dps os numbers
console.log(arrayMultiplosTipos.sort());
console.log(arrayMultiplosTipos.join());
//Enum
var Fumos;
(function (Fumos) {
    Fumos[Fumos["Strong"] = 0] = "Strong";
    Fumos[Fumos["Cherrybomb"] = 1] = "Cherrybomb";
    Fumos[Fumos["Tangerbomb"] = 2] = "Tangerbomb";
})(Fumos || (Fumos = {}));
console.log(Fumos);
var Celulares;
(function (Celulares) {
    Celulares[Celulares["Iphone"] = 10] = "Iphone";
    Celulares[Celulares["Samsung"] = 11] = "Samsung";
    Celulares[Celulares["Xiaomi"] = 12] = "Xiaomi";
})(Celulares || (Celulares = {}));
console.log(Celulares);
console.log(Celulares[12]);
var Celular;
(function (Celular) {
    Celular["Iphone"] = "Iphone 12 pro max";
    Celular["Samsung"] = "Galaxy A80";
    Celular["Xiaomi"] = "Mi Note 9";
})(Celular || (Celular = {}));
console.log(Celular.Iphone);
console.log(Celular["Iphone 12 pro max"]);
