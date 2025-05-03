// Object Wadah untuk nilai yang bernama disebut properti
// Create Object
let spaceship = {
    // Property => apa yang dimiliki oleh object
    'nameRocket': "Soyuz",
    homeplanet: "Earth",
    color: "Silver",
    'Fuel Type': "Turbo Fuel",
    // Method => apa yang dilakukan oleh object
    terbang(){
        console.log("WUUSHHHHHH!")
    },
    // Nested Object
    crew: {
        captain:{
            nama: "Reyqal",
            umur: 20,
            job: "Pilot"
        },
        pramugari: {
            nama: "Ibing",
            umur: 100,
            job: "Pramugari"
        },
        engineer: {
            nama: "Aji",
            umur: 1000,
            job: "Engineer"
        }
    }
}

// Memanggil + menampilkan property object
console.log(
    spaceship.color,
    spaceship['nameRocket'],
    spaceship['Fuel Type']
)
// Object desticturing
const {homeplanet,color} = spaceship;
console.log(homeplanet,color)

// Assignment => mengubah isi property
spaceship.color = "red",
spaceship['nameRocket'] = "Space X",
spaceship['Fuel Type'] = "Pertamax Turbo"

// Hasil assignment
console.log(
    spaceship['nameRocket'],
    spaceship['color'],
    spaceship['Fuel Type']
)

// Memanggil method
spaceship.terbang()

// Nested Object
// memanggil nested object
console.log(spaceship.crew.pramugari.nama)
// Or
console.log(spaceship.crew['captain'].nama)

// Looping Through Object
// For...in
for (let crewMember in spaceship.crew){
    console.log(`${crewMember}: ${spaceship.crew[crewMember].umur}`)
}

// ctrl + windows + shift + b => cheat gta  