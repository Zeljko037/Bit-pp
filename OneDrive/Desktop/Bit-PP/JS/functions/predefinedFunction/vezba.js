/*var x = parseInt('40 30 20')
console.log(x);
var y = parseFloat('20.31')
console.log(y)

var z = Number('xyz')
console.log(z);

isNaN('foo') == true // a string is indeed not a number
isNaN(NaN) == true
isNaN(12) == false
isNaN([1,2,3]) == true // an array is also not a number
console.log(isNaN(undefined))

function checkIfItIsNumber(input) {
    var parsed = Number(input);
    var result = isNaN(parsed)
    if (result) {
        return 'Input is not a number'
    } else {
        return 'Input is a number'
    }
}

console.log(checkIfItIsNumber('asdf'))
console.log(checkIfItIsNumber(323))

console.log(isFinite(45))
console.log(isFinite(undefined))

var a = 10;
var b = 20;
var z = eval('a * b')
console.log(z)

function dynamicCalculation(a, b, operation) {
    var op = 'a' + operation + 'b';
    return eval(op)
}

console.log(dynamicCalculation(10, 20, '+'))*/


/*1. Write a function that converts an array of strings into an array of numbers. Filter
out all non-numeric values.
Input: ['1', '21', undefined,'42', '1e+3', Infinity];
Output: [1, 21, 42, 1000];*/


var b = [];
function brojevi(input){
for(var i = 0;i<input.length;i++){

    if(Number(input[i],) && input[i] != Infinity){
        b.push(Number(input[i]));
    }

}
return b
}

brojevi(['1', '21', undefined,'42', '1e+3', Infinity]);
console.log(b)


/*2. Write a program to join all elements of the array into a string skipping elements
that are undefined, null, NaN or Infinity.
Input [Nan, 0, 15, false, -22, '', undefined, 47, null];
Output: “015false-2247”;*/


function niz(input){
    b = ''

    for(var i = 0; i<input.length;i++){

        if(!isNaN(input[i]) && input[i] != null){
            b+=input[i]
        }
    }
    return b
}
var c = niz([NaN, 0, 15, false, -22, '', undefined, 47, null])
console.log(c)



//zasto prikazuje true?
//input[i] || input[i] == false


/*3. Write a program to filter out falsy values from the array.
Input: [NaN, 0, 15, false, -22,'', undefined, 47, null]
Output: [15, -22, 47]*/


function filter(input){
    var b = []
    for(var  i= 0; i<input.length;i++){
        if(Boolean(input[i]) != false){
            b.push(Number(input[i]))
        }

    }
        
return b

}


var c = filter([NaN, 0, 15, false, -22,'', undefined, 47, null])
console.log(c)

// zasto pokazuje Nan         if(typeof(input[i])== 'number' && input[i] != 0)
// kod if(Number(input[i]) && input[i] != 0) je ok


/*4. Write a program that calculates a number of integer values in the array.
Input: [NaN, 23.1, 15, false, -22.5, '', 4, 7, null]
Output: 3*/



function kalkulator(input){
    var b = 0
    for(var  i= 0; i<input.length;i++){
        if(input[i] == parseInt(input[i])){
            b++
        }

    }
        
return b

}

var c = kalkulator([NaN, 23.1, 15, false, -22.5, '', 4, 7, null])

console.log(c)


/*5. Write a program that calculates a number of float values in the array.
Input: [NaN, 23.1, 15, false, -22.5, '', 4, 7, null]
Output: 2*/

function float(a){
    var b= 0;
     for(var  i= 0; i<a.length;i++){
        var broj = Number(a[i])
        if(parseFloat(broj) != parseInt(broj) && !isNaN(broj)){
        b++
        console.log(broj)
        }
    }
    return b
}

var c = float([NaN, 23.1, 15, false, -22.5, '', 4, 7, null])
console.log(c)

function float(a){
    var b= 0;
     for(var  i= 0; i<a.length;i++){
        var broj = Number(a[i]);
        console.log(broj)
        if(!Number.isInteger(broj) && !isNaN(a[i]))
        b++
    }
    return b
}

var c = float([NaN, 23.1, 15, false, -22.5, '', 4, 7, null])
console.log(c)
