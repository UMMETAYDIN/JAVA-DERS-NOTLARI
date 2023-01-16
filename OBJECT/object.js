//data object

let d= new Date();
console.log(d);

///Get methods

// console.log(d.getDate()); //15  o gunun tarihini verir
// console.log(d.getDay()); // 0 verir yani bugün pazar
// console.log(d.getFullYear()); // 2023 verir
// console.log(d.getHours());// saati verir
// console.log(d.getMonth()); // 0  yani ilk ay ocak ı verir
// console.log(d.getSeconds());// o anki saniyeyi verir


// örnek -1
//  şimdiki tarihin gün ay ve yıl bildisini giriniz

//  let moment= new Date();
//  console.log(moment.getFullYear()); //2023 yazdırır

//  console.log(moment.getMonth()+1);//0 dan başlar aylar o yüzden 1 ekledik 

//  console.log(moment.getDate());//15 olarak bugünün tarihini verir


//  örnek-2

// 1/1/1990 tarihinden bir gün öncesini yazdırınız

let tarih= new Date(`1/1/1990`);
let dayOfMonth= tarih.getDate();
tarih.setDate(dayOfMonth-1);
console.log(tarih);
