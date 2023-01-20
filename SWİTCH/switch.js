//switch case
// switch (key) {
//     case value:

//         break;

//     default:
//         break;
// }

// let category = "beyaz eşya";

// switch (category) {
//     case "telefon":
//         console.log("telefon kategorisi");
//         break;

//     case "bilgisayar":
//         console.log("bilgisayar kategorisi");
//         break;
//     default:
//         console.log('yanlış kategori');

// }

// let val;

// let person={
//     firstName:'Fatih',
//     lastName:'Aydin',
// };
// console.log(person);// {firstName: 'Fatih', lastName: 'Aydin'}

// console.log(typeof person); //object



let val;

let person={
    firstName:'Fatih',
    lastName:'Aydin',
    age:7,
    hobbies:['music', 'game'],
    adress:{
        city:'Osmaniye',
        country:'Türkiye',
    }
    
};

// console.log(typeof person); //object

val=person;
val=person.firstName;//Aydın
val=person.lastName;//Aydın
val=person['firstName'];// Fatih
val=person.age; //7
val=person.hobbies; //['music', 'game']
val=person.adress; //{city: 'Osmaniye', country: 'Türkiye'}
val=person.adress[0];

console.log(val);// 