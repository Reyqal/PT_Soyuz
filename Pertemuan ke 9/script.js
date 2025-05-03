// kondisi awal,kondisi,statement
// console.log("cape kuliah")

// for (inisialisasi; kondisi; increment/decrement) {
//   // blok kode yang akan dijalankan berulang
// }

// 
// for(let i = 0; i < 5; i++){
//     if (i == 3){
//         break;
//     }
//     console.log(`ini iterasi ke ${i + 1} inde ke ${1}`)
//     console.log("ini iterasi ke" + (i+1) + "index ke " + 1)
// }

// console.log("")

// for(let i = 0; i < 5; i++){
//     if (i == 3){
//         continue;
//     }
//     console.log(`ini iterasi ke ${i + 1} inde ke ${1}`)
//     console.log("ini iterasi ke" + (i+1) + "index ke " + 1)
// }

// for(let i = 0; i < 5; i--){
//     if (i == 3){
//         continue;
//     }
//     console.log(`ini iterasi ke ${i + 1} inde ke ${1}`)
//     console.log("ini iterasi ke" + (i+1) + "index ke " + 1)
// }

// Nested Loop
for(let i = 1; i <= 2; i++){
    for (j = 1;  j <= 3; j++){
        console.log(`ini baris ke ${i} kolom ke ${j}`)
    }
}

// Simple pattern
for(let i = 1; i <= 5; i++){
    let asteriskCharacter = ""
    for (j = 1;  j <= i; j++){
        asteriskCharacter += "*"
    }
    console.log(asteriskCharacter)
}


// Function => input proses output

function sayHelloNoNama(){
    console.log("Hello Selamat datang");
}
sayHelloNoNama()

sayHello("Reyqal")
function sayHello(nama){
    console.log(`Hello ${nama}`);
    console.log("Hallo", nama);
}
sayHello("Reyqal")

const nama = function(){
    console.log("Tes")
}
nama()

const angka = (a) => {
    console.log("Ini angka", a)
}

angka(10)


// Function return

function nam(a){
    return a
}

let namamu = nam("ReyQ")
console.log(namamu)

let kalimat = "I am learning"
console.log(kalimat.split(" "))
console.log(kalimat.substring(0,4))
console.log(Math.random(0,10)*100)

let kalimat2 = "I am learning"