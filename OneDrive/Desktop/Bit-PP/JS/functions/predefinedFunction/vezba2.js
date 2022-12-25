/*1. Napisati funkciju u JavaScript-u koja na osnovu niza 6 različitih citata i autora,
ispisuje na stranici po jedan citat, ali tako da se citat promeni kada se program
pokrene.*/

function random(a) {
    var broj = (Math.floor(Math.random() * 12));
    var citat = '';
    var autor = '';
    for (var i = 0; i < a.length; i++) {
        if (i % 2 == 0) {
            citat = a[broj]
            autor = a[broj + 1]
        }
        else {
            citat = a[broj - 1]
            autor = a[broj]
        }
    }
    i = (Math.floor(Math.random() * 6));

    return citat + "\n" + autor
}


var c = random(['nikad nisi mladji nago danas', 'Neko sa facebooka',
    'ne moze pammetan da popusti koliko budala moze da zapne', 'Dalej Lama',
    'kafana je moja sudbina', 'Toma',
    'Bolje biti pijan nego star', 'plavi orkestar',
    'Hakuna matata', 'bradavicasta svinja',
    'oj mladosti', 'Rados bajic']);

console.log(c)


//2. Write a function that combines two arrays by alternatingly taking elements.
//[‘a’,’b’,’c’], [1,2,3] -&gt; [‘a’,1,’b’,2,’c’,3]

var mix = input(['a', 'b', 'c'], [1, 2, 3])

function input(a, b) {
    var sum = [];
    for (i = 0; i < a.length; i++) {
        sum.push(a[i])
        sum.push(b[i])
    }
    return sum;
}

console.log(mix);

//3. Write a function that rotates a list by k elements.
//For example [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2]

var a = [1, 2, 3, 4, 5, 6]
var k = 3

var right = a.splice(k);
var prikaz = right.concat(a)
console.log(prikaz)

///4. Write a function that takes a number and returns array of its digits.

var broj = input(43321)

function input(a) {
    var prikaz = [];
    for (i = 0; i < 10; i++) {
        if (a > 0) {
            var c = b
            a = Math.floor(a / 10)
            prikaz.push(c)
        }
    }
    return prikaz;
}

console.log(broj);

//5. Write a program that prints a multiplication table for numbers up to 12.

/*var a = 10;
var b = 20;
var z = eval('a * b')
console.log(z)

function dynamicCalculation(a, b, operation) {
    var op = 'a' + operation + 'b';
    return eval(op)
}

console.log(dynamicCalculation(10, 20, '+'))*/


var broj = unos(12, '*')

function unos(a) {
    var prikaz = [];
    for (i = 1; i <= a; i++) {
        for (j = 1; j <= a; j++) {
            prikaz.push(j * i)


        }
    }
    return prikaz
}
console.log(broj);

//6. Write a function to input temperature in Centigrade and convert to Fahrenheit.

var far = input(23)
function input(a) {
    var farnhajt = a * 1.8

    return farnhajt
}

console.log(far);

//7. Write a function to find the maximum element in array of numbers. Filter out all non-number
//elements.

var b = unos([NaN, 3, 8, 5, 4, undefined, null, 5]);

function unos(a) {
    var clear = [];
    var max = 1
    var prikaz = []
    for (i = 0; i < a.length; i++) {
        if (!isNaN(Number(a[i])) && a[i] != null) {
            clear.push(a[i])
        }
        if (max < a[i]) {
            max = a[i]

        }
    }
    prikaz = clear + '\n' + max
    return prikaz


}
console.log(b);

//8. Write a function to find the maximum and minimum elements. Function returns an array.

var b = unos([3, 8, 5, 4, 9, 5]);

function unos(a) {

    var max = 1
    var min = 9
    var prikaz = []
    for (i = 0; i < a.length; i++) {

        if (max < a[i]) {
            max = a[i]
        }
        if (min > a[i]) {
            min = a[i]
        }
    }
    prikaz.push(min)
    prikaz.push(max)
    return prikaz


}
console.log(b);

//9. Write a function to find the median element of array.

//10. Write a function to find the element that occurs most frequently.

var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var maxPOnavljanje = 1;
var brojac = 0;
var item;
for (var i = 0; i < arr1.length; i++) {
    for (var j = 0; j < arr1.length; j++) {
        if (arr1[i] == arr1[j])
            brojac++;
        if (maxPOnavljanje < brojac) {
            maxPOnavljanje = brojac;
            item = arr1[i];
        }
    }

    brojac = 0;
}
console.log(item + " ( " + maxPOnavljanje + " times ) ");


var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

var maxPOnavljanje = 1;
var brojac = 0;
var item;

for (var i = 0; i < a.length; i++) {
    for (var j = i; j < a.length; j++) {
        if (a[i] == a[j]) {
            brojac++;
        }
        
        if (maxPOnavljanje < brojac) {
            maxPOnavljanje = brojac;
            item = a[i];
        }
    }
    brojac = 0;
}
console.log(item + '(' + maxPOnavljanje + ' puta )')



/*11. Write a function to find and return the first, middle and last element of an array if the array
has odd number of elements. If number of elements is even, return just the first and the
last. In other cases (empty array), input array should be returned.*/


var c = provera([3, 4, 6, 8, 7, 5, 3, 2, 4, 9, 6]);

function provera(a){
    var prvi;
    var poslednji;
    var srednji;
    var brojac = 0
    prikaz = [];

            for(i = 0; i<a.length;i++){
               brojac++ 
            }
            brojac = (brojac - 1)/2
        
    
        if(a.length % 2 != 0){
            prvi = a[0];
            srednji = a[brojac]
            poslednji = a[a.length-1]
            prikaz.push(prvi)
            prikaz.push(srednji)
            prikaz.push(poslednji)

   
        }
        else{
            prvi = a[0];
            poslednji = a[a.length-1]
            prikaz.push(prvi)
            prikaz.push(poslednji)

        }

   
    return prikaz;
}
console.log(c)




/*12. Write a function to find the average of N elements. Make the function flexible to receive
dynamic number or parameters./

/*13. Write a function to find all the numbers greater than the average.*/

var c = provera([2, 4, 6, 8, 3, 5, 7, 8, 9, 3, 6]);


function provera(a){
    var prosek = 0;
    var prikaz =[];
    var avr = prosek/(i+1)
    for(i = 0; i<a.length;i++){
        prosek +=a[i]
        
        var avr = prosek/(i+1)

        if(a[i]>avr){
            prikaz.push(a[i])
            console.log(avr);
        }
       
    }
    
    return prikaz


}
console.log(c);