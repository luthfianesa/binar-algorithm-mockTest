// Algoritma
// 1. Buat fungsi fizzBuzz berisi parameter n untuk batasan dari perulangan nantinya 
// 2. Melakukan perulangan dengan for dimulai dari angka 1 hingga kurang dari sama dengan n
// 3. Pengkondisian di dalam perulangan
// - Jika angkanya bisa dibagi 3 dan 5 cetak ke konsol "FizzBuzz" 
// - Jika angkanya hanya bisa dibagi 3 cetak ke konsol "Fizz" 
// - Jika angkanya hanya bisa dibagi 5 cetak ke konsol "Buzz"
// - Selain angka di atas, cetak angka perulangannya 

const fizzBuzz = (n) => {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
};

console.log(fizzBuzz(15));

