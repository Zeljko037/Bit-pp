//*1. Write a function to check whether the `input` is a string or not.
//'My random string'-> true
//12 -> false*/


// function provera(a, isString){
//     for(var i = 0;i<a.length;i++){
//         if(typeof a === 'string'){
//         isString = true;
//         }
        

//     }

// return isString;
// }


// var b = provera('My random string', false);
// console.log(b);

/*2. Write a function to check whether a string is blank or not.
'My random string&'->'false
'' -> true
12 -> false
false -> false*/

function provera(a, isString){
    for(var i = 0;i<a.length;i++){
        if(typeof a === 'string' || a.length == 0){
        isString = true;
        }

        

    }

return isString;
}


var b = provera('', false);
console.log(b);


/*3. Write a function that concatenates a given string n times (default is 1).
"Ha" -> "Ha"
"HA", 3 -> "HaHaHa"*/

var t = bbb("ha",7)

function bbb(a,b){
    var c =''
    for(var i = 0;i<b;i++){
        
         c += a
    }
    return c
}
console.log(t)

/*4. Write a function to count the number of letter occurrences in a string.
'My random string' n-> 2*/

var t = ppp('My random string', 'g')

function ppp(a,b){
    var count = 0;
    for(var i = 0; i<a.length;i++){
        if(b == a[i]){
        count++
        }
    }
    return count;
}
console.log(t)


/*5. Write a function to find the position of the first occurrence of a character in a string. The
result should be the position of character. If there are no occurrences of the character, the
function should return -1.*/


var t = uljez('pronadjiul,jeza');

function uljez(a){
    var provera = ''
    for(var i = 0; i<a.length;i++){
        provera = a[i]
        if(provera == ','){
            provera = i
            break
  
        }
    }
    return provera

}
console.log('nalazi se na poziciji ' + t);



var string = 'pronadjiul,jeza';
var provera = string.indexOf(",");
console.log('Nalazi se na pozicji ' + provera)

/*7. Write a function to convert string into an array. Space in a string should be represented as
“null” in new array.*/

'this is string' - > ['t', 'h', 'i', 's', null, 'i', 's']

var t = niz('this is my string')

function niz(a){
    var arr =[];
    for(var i = 0; i<a.length;i++){
        arr.push(a[i]) ;
        if(a[i] == ''){
            arr = null
        }
    }
    return arr;
}

console.log(t);

/*8. Write a function that accepts a number as a parameter and checks if the number is prime or
not.
Note: A prime number (or a prime) is a natural number greater than 1 that has no positive
divisors other than 1 and itself.*/