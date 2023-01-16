//Arrays

// let names= ['çınar', 'sena','ada','yiğit']

//let years= [2017,1999,2012,2010]

// let mix= ['ali', 1990, null, undefined, ['cinena', 'kitap']];

// console.log(names);// 4) ['çınar', 'sena', 'ada', 'yiğit']
// console.log(names.length);//4
// console.log(typeof names); //object

// console.log(years);//2017, 1999, 2012, 2010]

 // get array item
// console.log(names[0]);// çınar
// console.log(names[3]);// yiğit

 //set array item mames dizisinin 0. elemanına 'mustafa' değişkenini atadık
// names[0]= 'mustafa'
// console.log(names);


// add item =>diziye eleman eklemek için kullanılır
// let years= [2017,1999,2012,2010]
// years.push(1986);// dizinin sonuna eleman ekler
// console.log(years); //[2017, 1999, 2012, 2010, 1986]

// years.unshift(1980);
// console.log(years);

// remove item => diziden eleman çıkarmak için kullanılır
// years.pop();// sondaki elemanı siler
// console.log(years);//[1980, 2017, 1999, 2012, 2010]
// years.shift();// baştaki elemanı siler
// console.log(years); //[2017, 1999, 2012, 2010]

//indexof

// let index= names.indexOf('ada');
// console.log(`index:`+index); //index:2
// // let index= names.indexOf('adaaa');
// console.log(`index:`+index); //index:-1 bulamazsa -1 dönderir

//reverse : index numaralarının yerini degiştirir ters yapar
// let names= ['çınar', 'sena','ada','yiğit']
// names.reverse();
// console.log(names);//['yiğit', 'ada', 'sena', 'mustafa']


//sort metodu dizideki elemanları sıralar
// let years= [2017,1999,2012,2010]
// years.sort();
// console.log(years); //[1999, 2010, 2012, 2017]

//concat dizi birleştirme demek

// let val=years.concat(names);// birleştirme yapar
// console.log(val);//[1999, 2010, 2012, 2017, 'çınar', 'sena', 'ada', 'yiğit']


//splice 

// names.splice(2,0,'ayşe')// 2.indexten sonra eleman silmek istemezsek 0 yazarız ve ayşe elemanını ekleriz
// console.log(names);// ['çınar', 'sena', 'ayşe', 'ada', 'yiğit']

// names.splice(2,1,'ayşe')// 2.indexten sonra eleman silmek istersek 1 yazarız ve ayşe elemanını ekleriz

// console.log(names); //['çınar', 'sena', 'ayşe', 'yiğit']


let names= ['çınar', 'sena','ada','yiğit']

//find metotlarına bakılacak

//filtermetotlarına bakılacak
