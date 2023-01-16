// console.log("merhaba");

// Numbers
// let val;
// val= Number(`10`);
// val= parseInt(`10`);
// val= parseFloat(`10.5`)
// val= parseFloat(`10.5`)




// let num=10.123456789
// val= num.toPrecision(6);// 10.1235 toplamda 6 basamak alır
// val= num.toFixed(2);// virgülden sonra 2 rakam daha alır 10.12
// console.log(val);
// console.log(typeof val); 
// let val;

// val= Math.PI;//3,14
// val= Math.round(2,4);// 2 normal yuvarlama yapar
// val= Math.round(2,7);//3 normal yuvarlama yapar
// val= Math.ceil(2,4);// 3 (tavan demektir)
// val= Math.ceil(2,7) //3 her zaman üste yuvarlar
// val=Math.floor(2,4) //2 her zaman aşagı yuvarlar floor =zemin
// val=Math.floor(2,8)//2 her zaman aşagı yuvarlar

// val= Math.min(1,2,561,3);// 1 (minimum sayıyı() verir
// val= Math.max(3,125,5,7,9);// 125 (maximum sayıyı) verir

// val= Math.random();// 0-1 arasında rastgele sayı verir
// val= Math.random()*10; // 0-10 arası sayı verir
// val= Math.random()*100// 0-100 arası sayı verir
// val= Math.floor(Math.random()*10);// 0-10arası deger verir

// console.log(val);


// örnekler

// var num= 15.123456789;

 // soru-1 
 // Toplamda 3 basamaklı sayı kullan?
// var num= 15.123456789;
// console.log(num.toPrecision(3));//15.1 verir

 // soru-2
 // ondalık kısmı 3 basamakta sınırlayınız?
// var num= 15.123456789;
// console.log(num.toFixed(3)); // 15.123

 // soru-3
 // en yakın sayıya yuvarlayınız?
// var num= 15.123456789;
// console.log(Math.round(num)); // 15

 //soru-4
 //aşagi yuvarlayınız?
// var num= 15.123456789;
// console.log(Math.floor(num));//15 

 // soru-5
 // yukarı yuvarlayınız?
// var num= 15.123456789;
// console.log(Math.ceil(num));//16


//soru-6
// 1,2,10,56,20 sayılarının en küçük ve en büyüğünü bulunuz?
// console.log(Math.min(1,2,10,56,20)); // 1
// console.log(Math.max(1,2,10,56,20));//56

//soru-7 
// sayı aralıgını kullanıcının belirleyecegi rastgele bir sayı üretiniz?
// 20-30 arası rastgele bir sayı üretelim
// var min=20;
// var max=30;

// console.log(Math.floor(min+Math.random()*(max-min)))

