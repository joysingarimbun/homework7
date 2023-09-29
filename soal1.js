var hitung = require("./rumus.js");

var sisi = 10;
var panjang = 10;
var lebar = 2;

console.log("Keliling Persegi : " + hitung.kelilingPersegi(sisi));
console.log("Luas Persegi : " + hitung.luasPersegi(sisi));
console.log("Keliling Persegi Panjang : " + hitung.kelilingPersegiPanjang(panjang, lebar));
console.log("Luas Persegi Panjang : " + hitung.luasPersegiPanjang(panjang, lebar));
