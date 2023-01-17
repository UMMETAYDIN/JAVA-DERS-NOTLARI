//array

// ÖRNEK SORULAR VE ÇÖZÜMLERİ

// "Bmv, Mercedes, Opel,Mazda" elemanlarına sahip bir dizi oluşturun

let array= ["Bmv", "Mercedes", "Opel", "Mazda"];
console.log(array);//Array(4) ,['Bmv', 'Mercedes', 'Opel', 'Mazda']

let array2= new Array( "Bmv", "Mercedes", "Opel", "Mazda")
console.log(array2); //['Bmv', 'Mercedes', 'Opel', 'Mazda'] aynı sonuç olur

//Dizi kaç elemanlıdır?

// console.log(array2.length);//4

//Dizinin ilk ve son elemanı nedir?

console.log(array2[0]);// Bmv olarak yazdırır ilk endex
console.log(array2[3] );// Mazda olarak son elemanı yazdırır.

console.log(array2[array2.length-1]);
let a=array2.length-1 
console.log(a);//3 elemanı verir yani sonuncu elamanı


//"Ferrari" değerini dizinin sonuna ekleyin

array2.push("Ferrari");
console.log(array2); //['Bmv', 'Mercedes', 'Opel', 'Mazda', 'Ferrari']

array2[4]="Toyota"
console.log(array2);//['Bmv', 'Mercedes', 'Opel', 'Mazda', 'Toyota']

array2.push("Taksi");
console.log(array2); //['Bmv', 'Mercedes', 'Opel', 'Mazda', 'Toyota']


//"anadol" degerini dizinin başına ekleyin

array2.unshift("Anadol")
console.log(array2); //Array(6)0: "Anadol"1: "Bmv"2: "Mercedes"3: "Opel"4: "Mazda"5: "Ferrari"length:

// "Taksi" degerini siliniz?

array2.pop('Taksi')
console.log(array2); //['Toyota', 'Bmv', 'Mercedes', 'Opel', 'Mazda', 'Toyota']

// Dizi elemanlarını terd çevirin
array2.reverse()
console.log(array2);// ['Toyota', 'Mazda', 'Opel', 'Mercedes', 'Bmv', 'Anadol']

//dizi elemanlarını alfabetik olarak sıralayınız?

array2.sort();
console.log(array2);//['Anadol', 'Bmv', 'Mazda', 'Mercedes', 'Opel', 'Toyota']


//[1,2,5,50] Dizisini sıralayınız?

const sira= [1,5,2,50]
sira.sort();
console.log(sira);//[1, 2, 5, 50]
const numbers= [1,5,2,50]
console.log(numbers.sort()); //1, 2, 5, 50]

// Opel degeri dizinin elemanı mıdır?
console.log(array2);
console.log(array2.indexOf('Opel')); //4 olarak elemanı oldugunu söyler eger olmasa idi -1 söylerdi

// yada 

console.log(array2.includes('Opel'));// true oldugu için bu diziniz elemanıdır diyebiliriz

//var str = "Chevrolet, Dacia"; ifadesini diziye çeviriniz

var str= "Chevrolet, Dacia";
var arr1=str.split(',');
console.log(arr1); //['Chevrolet', ' Dacia']


//Aşagıda verilen elenanları bir dizi içerisinde saklayınız

studentA = Yiğit Bilgi 2010
studentB = Sena Turan 1999
studentC = Ahmet Turan 1998

let studentA = ['Yiğit', 'Bilgi', 2010]
let studentB = ['Sena', 'Turan', 1999]
let studentC = [';Ahmet', 'Turan', 1998]
var students=[ studentA, studentB, studentC]
console.log(students);       //[array(3), array(3), array(3)]
console.log(students[0]);    //['Yiğit', 'Bilgi', 2010]
console.log(students[0] [0]); // Yiğit
console.log(students[0] [1]);  //Bilgi

console.log(students[1] [0]);  //Sena
console.log(students[1] [1]);  //Turan
console.log(students[1] [2]);  //1999

console.log(students[2] [0]);  //Ahmet
console.log(students[1] [2]);  //1998