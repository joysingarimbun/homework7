// hitung keliling persegi
exports.kelilingPersegi = function (sisi) {
  return 4 * sisi;
};

// hitung luas persegi
exports.luasPersegi = function (sisi) {
  return sisi * sisi;
};

// hitung keliling persegi panjang
exports.kelilingPersegiPanjang = function (panjang, lebar) {
  return 2 * panjang + 2 * lebar;
};

// hitung luas persegi panjang
exports.luasPersegiPanjang = function (panjang, lebar) {
  return panjang * lebar;
};
