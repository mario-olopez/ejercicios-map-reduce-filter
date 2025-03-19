//RESUELVE LOS EJERCICIOS AQUI

//Ejercicio 1

let numbers = [4, 5, 6, 7, 8, 9, 10]

let elevados = () => numbers.map(numero => Math.pow(numero, numero))

//console.log(elevados(numbers))

//Ejercicio 2 (sin resolver)

const foodList = ["Pizza", "Ramen", "Paella"]
const paises = ["Italia", "Japón", "Valencia"]

/*const anadirPais = (pais, comida) => "Como soy de " + pais + ", amo comer " + comida //Lógica
const result2 = foodList.map((comida, i) => `Como soy de ${paises[i]}, amo comer ${comida}`) //Solución por IA
*/

/*[
  'Como soy de Italia, amo comer Pizza',
  'Como soy de Japón, amo comer Ramen',
  'Como soy de Valencia, amo comer Paella',
  'Aunque no como carne, el Entrecot es sabroso'
]*/

//Ejercicio 3

const staff = [
  {
    name: 'Pepe',
    role: 'The Boss',
    hobbies: ['leer', 'ver pelis']
  },
  {
    name: 'Ana',
    role: 'becaria',
    hobbies: ['nadar', 'bailar']
  },
  {
    name: 'Luis',
    role: 'programador',
    hobbies: ['dormir', 'comprar']
  },
  {
    name: 'Carlos',
    role: 'secretario',
    hobbies: ['futbol', 'queso']
  }
];


// Resultado esperado
/*
  [
    'Pepe es The Boss y le gusta leer y ver pelis',
    'Ana es becaria y le gusta nadar y bailar',
    'Luis es programador y le gusta dormir y comprar',
    'Ana es becaria y le gusta nadar y bailar',
    'Carlos es secretario y le gusta futbol y queso'
  ]
*/

//Ejercicio 4

const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result4 = numbers2.filter(impar => impar % 2 !== 0)

//Ejercicio 5

const foodList2 =[
    {
      name: 'Tempeh',
      isVeggie: true
    },
    {
      name: 'Cheesbacon burguer',
      isVeggie: false
    },
    {
      name: 'Tofu burguer',
      isVeggie: true
    },
    {
      name: 'Entrecot',
      isVeggie: false
    }];

const result5 = foodList2.filter(vegano => vegano.isVeggie === true)
.map(nombre => nombre.name)


//Ejercicio 6

const inventory = [
    {
      name: 'Mobile phone',
      price: 199
    },
    {
      name: 'TV Samsung',
      price: 459
    },
    {
      name: 'Viaje a Cancún',
      price: 600
    },
    {
      name: 'Mascarilla',
      price: 1
    }
  ];

  const result6 = inventory.filter((sablada) => {
    sablada.price > 300
  })

  console.log(result6)

//Ejercicio 7

const numeros3 = [39, 2, 4, 25, 62]
const result7 = numeros3.reduce((acc, num) => acc * num)

console.log(result7)

//Ejercicio 8

const sentenceElements = [
    'Me',
    'llamo',
    'y',
    'quiero',
    'sentir',
    'la',
    'fuerza',
    'con',
    'javascript'
  ];

// Resultado--> 'Me llamo XX y quiero sentir la fuerza con javascript'

//Ejercicio 9

const books = [
    {
      name: ' JS for dummies',
      author: 'Emily A. Vander Veer',
      price: 20,
      category: 'code'
    },
    {
      name: 'Don Quijote de la Mancha',
      author: 'Cervantes',
      price: 14,
      category: 'novel'
    },
    {
      name: 'Juego de tronos',
      author: 'George R. Martin',
      price: 32,
      category: 'Fantasy'
    },
    {
      name: 'javascript the good parts',
      author: 'Douglas Crockford',
      price: 40,
      category: 'code'
    }
  ];

const result9 = books.filter(categoria => categoria.category === "code").reduce((acum, precio) => acum + precio.price, 0)


  












