// Template Literals
// let val;
// const fullName= 'ummet Aydın';
// const city= 'Osmaniye';
// const yearofBird=2000;

// val= 'my name is '+fullName+' I\'m '+(2023-yearofBird)+' years old'+' and I live in '+city;

// console.log(val);//my name is ummet Aydın I'm 23 years old and I live in Osmaniye

// val= `my name is${fullName} I'm ${2023-yearofBird} years old and I live in ${city}`;
// console.log(val);//my name isummet Aydın I'm 23 years old and I live in Osmaniye

// Ternary Operator

// val= `my name is ${fullName} I'm ${2023-yearofBird>18?'over 18':'under18'} years old and I live in ${city}`;
// console.log(val);//my name is ummet Aydın I'm over 18 years old and I live in Osmaniye


let val;
const fullName= 'ummet Aydın';
const city= 'Osmaniye';
const yearofBird=2010;

val= `my name is ${fullName} I'm ${2023-yearofBird>18?'over 18':'under 18'} years old and I live in ${city}`;
console.log(val); //my name is ummet Aydın I'm under 18 years old and I live in Osmaniye


${2023-yearofBird>18? 'over 18': 'under 18'}// eger yaşım 18 den büyükse ilk eylemim gerçekleşsin yani pver18 (true) degilse ikinci eylemim gerçekleşsin