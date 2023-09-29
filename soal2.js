const fs = require("fs");

const readfilelog = "homework.log";
const writefiletxt = "log.txt";

fs.readFile(readfilelog, "utf8", (err, data) => {
  if (err) {
    console.error("Gagal membaca file log:", err);
  } else {
    fs.writeFile(writefiletxt, data, (err) => {
      if (err) {
        console.error("Gagal menulis ke dalam file log kedalam file txt:", err);
      } else {
        console.log("Isi file log berhasil disalin ke dalam file log.txt.");
      }
    });
  }
});
