 /* // 1-)

let challenge = '30 Days Of Javascript';

// 2-)

console.log(challenge);

// 3-)

let o1 = 'print';
console.log(o1.length)

// 4-)

console.log(challenge.toUpperCase(), o1.toUpperCase())

// 5-)

console.log(challenge.toLowerCase(), o1.toLowerCase())

// 6-)

let string1 = 'codeitanytime';
console.log(string1.substring(4,13))

// 7-)

let phrase = challenge.substring(challenge.indexOf('Days'), challenge.length);
console.log(phrase); // This will print 'Days Of JavaScript' to the console

// 8-)

console.log(string.includes('Script')) // this will print 'True'

// 9-)

console.log(string.split(' ')) // This will print '[Javasript]'

// 10-)

console.log(challenge.split(' ')) // This will print '[ "30", "Days", "of", "Javascript" ]'

// 11-)

let companys = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(companys.split(' '))    // This will print '['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']'

// 12-)

console.log(challenge.replace('Javascript', 'Python')) // This will print '30 Days of Python'

// 13-)

console.log(challenge.charAt(15))   // This will print 's'

// 14-)

console.log(challenge.charCodeAt('J'))  // This will print 51

// 15-)

console.log(challenge.indexOf('a')) // This will print 4

// 16-)

console.log(challenge.lastIndexOf('a')) // This will print 14

// 17-)

let sentence = 'You cannot end a sentence with because because because is a conjunction';
console.log(sentence.indexOf('because')) // This will print 31

// 18-)

console.log(sentence.lastIndexOf('because')) // This will print 47

// 19-)

console.log(sentence.search('because')) // This will print 31

// 20-)

let trimmedChg = challenge.trim(); 
console.log(trimmedChg);      // this will print '30 Days of Javascript'

// 21-)
*/

let challenge = `30 Days of Javascript`;
console.log(challenge.startsWith('30'))

console.log(challenge.endsWith('script'))

console.log(challenge.match('a'))

// concat

let firstString = `30 Days of`;
let secondString = `Javascript`;
let mergedString = firstString.concat(secondString);
console.log(mergedString)

// repeat()

let string = `push`;
console.log(string.repeat(10))


console.log(`The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.`)







//trim




/*
 const ogrenciler = [
    {
      ad: "Ahmet",
      yas: 20,
      sinif: "11-A"
    },
    {
      ad: "Ayşe",
      yas: 19,
      sinif: "10-B"
    },
    {
      ad: "Mehmet",
      yas: 21,
      sinif: "12-C"
    },
    {
      ad: "Zeynep",
      yas: 18,
      sinif: "9-D"
    },
    {
      ad: "Fatma",
      yas: 22,
      sinif: "13-A"
    }
  ];

console.log(typeof ogrenciler)

if(typeof ogrenciler === "numbers"){
    const isim = "Habibullah";
    console.log("Merhaba"+isim+" Nasılsın");
}

const isim = "Habibullah";
console.log("Merhaba "+isim+" Nasılsın");
console.log(`MErhaba ${isim} nasılsın?`)

let say = 1;
let say2 = null;
say2  += say; 

console.log(say2)


let isRaining = true

isRaining ? console.log('You need a rain coat.') : console.log('No need for a rain coat.')

if(isRaining === true){
    console.log('You need a rain coat.')
} else{
    console.log('No need for a rain coat.')
}

let date = new Date();

console.log(date.getDay()) */