// string metotları

// const firstName= `ummet`;
// const lastName= "Aydin";
// const age=37;
// let hobies= "kitap, gazete, yazılım"
// let val;

//string concat

// val= firstName +` ` + lastName;
// val= firstName +" "+ lastName; //ikiside aynı olur

// val= "ummet";
// val+=" aydin";

// val= `Benim adım `+firstName+ ` `+lastName+ ` ve ben ` + age+` yaşındayım`+ ` ve ben osmaniye'de yaşıyorum.`;

//Benim adım ummet Aydin ve ben 37 yaşındayım ve ben osmaniye'de yaşıyorum.

//string concat
// val=firstName.concat(`-`, lastName)

 //string Length
// val=val.length;//11 karakterdir

//string uppercase-lowercase

// val =val.toUpperCase();
// console.log(val); //UMMET AYDIN


// val= val.toLowerCase();
// console.log(val);//ummet aydin
// console.log(typeof val); //string

// val=val[1];
// console.log(val);//m

// val=val.indexOf(`c`);
// console.log(val);//aradıgımız karakter string de yoktur.

//substring
// val=val.substring(2,6);// 2.indexten 6 yakadar olanı yazar consola
// console.log(val);

//slice

// val=val.slice(3)
// console.log(val);//3.karakter ve sonrasını keserek yazdırır.

//spring replace

// val= val.replace(`ummet`, `mehmet`);
// console.log(val);//mehmet aydın olarak değişir

//trim 
// val=val.trim //başta ve sondaki boşlukları siler 

//split

// val=hobies.split(`,`)  //araya ne koyarsak yukarıda da ne varsa ona göre yazar
// console.log(typeof val);//virgüllü olan yerleri ayırarak dizi halinde dönüştürür.


// örnek sorular

let sentence=" Template Literals or template strings is the ability Have multi-line strings without any funny business. " ;

// let url= "http://ummetaydin.com/Modern Javascript Kursu sıfırdan ileri seviye";


// ****** cümle kaç karakterlidir?

console.log(sentence.length);//104 

//*******kaç kelimeden oluşur?
console.log(sentence.trim().split(' ').length); // (15)


//*******tüm cümleyi kücük harfe çevirin

console.log(sentence.toLowerCase());//template literals or template strings is the ability have multi-line strings without any funny business. 

// ****tüm cümleyi büyükk harfe çevirin

console.log(sentence.toUpperCase()); //TEMPLATE LITERALS OR TEMPLATE STRINGS IS THE ABILITY HAVE MULTI-LINE STRINGS WITHOUT ANY FUNNY BUSINESS.

// *****cümlenin başındaki ve sonundaki boşlukları silin

console.log(sentence.trim()); //Template Literals or template strings is the ability Have multi-line strings without any funny business.


//******** '-' karakterini silin

console.log(sentence.replace('-','')); //emplate Literals or template strings is the ability Have multiline strings without any funny business.


//******url içerisinden str kısmını çıkarınız

let url= "http://ummetaydin.com/Modern Javascript Kursu sıfırdan ileri seviye";

let str= 'http://';

console.log(url.slice(str.length)); //ummetaydin.com/Modern Javascript Kursu sıfırdan ileri seviye

///****** url '.com' ifadesini içeriyormu?

console.log(url.indexOf('.com'));//17
console.log(url.includes('.com'));//true 
console.log(url.includes('.cok'));//false 

url string ifadesini geçerli bir url olarak düzenleyiniz
console.log(url.toLowerCase()
            .replace(//g, '-')
            .replaca (/ı/g, 'i')
            .replace (/ü/g, 'u' )
        
);
