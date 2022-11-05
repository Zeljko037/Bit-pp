/*1. Write a program that checks if a given element e is in the array a.
Input: e = 3, a = [5, -4.2, 3, 7]
Output: yes*/



function input(a, e) {

    var prikaz = 'no'
    for (var i = 0; i < a.length; i++) {
        if (e == a[i]) {
            prikaz = 'yes'
        }
    }
    return prikaz;

}

var d = input([5, -4.2, 3, 7], 3);
console.log(d);

//2. Write a program that multiplies every positive element of a given array by 2.
// Input array: [-3, 11, 5, 3.4, -8]
// Output array: [-3, 22, 10, 6.8, -8]


function puta(a) {
    for (var i = 0; i < a.length; i++) {

        var brojevi = a[i]
        if (brojevi > 0) {
            a[i] = brojevi * 2
        }
    }
    return a;
}

var niz = puta([-3, 11, 5, 3.4, -8])
console.log(niz);

/*3. Write a program that finds the minimum of a given array and prints out its value and
index.
Input array: [4, 2, 2, -1, 6]
Output: -1, 3*/

function provera(a) {
    for (var i = 0; i < a.length; i++) {
        var c = a[i];

        var min;
        if (c < min) {
            min = c
        }

    }
    return min;
}

var minimum = provera([4, 2, 2, -1, 6]);
console.log(minimum);

/*5. Write a program that calculates the sum of positive elements in the array.
Input array: [3, 11, -5, -3, 2]
Output: 16*/

function sum(a) {
    var c = 0
    for (var i = 0; i < a.length; i++) {
        var t = a[i]
        if (t > 0) {
            c += a[i]
        }
    }
    return c
}

var b = sum([3, 11, -5, -3, 2])
console.log(b)

/*6. Write a program that checks if a given array is symmetric. An array is symmetric if it can
be read the same way both from the left and the right hand side.
Input array: [2, 4, -2, 7, -2, 4, 2]
Output: The array is symmetric.*/

var t = pera([2, 4, -2, 7, -2, 4, 2])

function pera(a){
    var provera = false
    var desno = a.length - 1;
    for (var i = 0; i < a.length; i++) {
        if (i == desno) {
            break
        }
        else if (a[i] == desno[desno]){
            provera = true

        }
        else {
            isSimetric = false
        }
        desno--
    }
    return provera;
}
console.log(t);

/*7.Write a program that intertwines two arrays. You can assume the arrays are of the same
length.
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 3, 5, 8, 6, 11, 2, 9]*/

function niz(a, b, c) {
    for (var i = 0; i < a.length; i++) {
        c.push(a[i]);
        c.push(b[i]);
    }
    return c;
}

var y = niz([4, 5, 6, 2], [3, 8, 11, 9], [])
console.log(y)


/*8. Write a program that concatenates two arrays.
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 5, 6, 2, 3, 8, 11, 9]*/

var t = sum([4, 5, 6, 2], [3, 8, 11, 9], []);
console.log(t);

function sum(a, b, c) {
    for (var i = 0; i < a.length; i++)
        c = a.concat(b);
    return c;
}

/*9. Write a program that deletes a given element e from the array a.
Input: e = 2, a = [4, 6, 2, 8, 2, 2]
Output array: [4, 6, 8]*/

var t = out([4, 6, 2, 8, 2, 2], 2)

function out(a, b) {
    var c = [];
    for (var i = 0; i < a.length; i++) {
        if (a[i] != b) {
            c.push(a[i])
        }
    }
    return c
}
console.log(t);

/*10. Write a program that inserts a given element e on the given position p in the array a. If
the value of the position is greater than the array length, print the error message.
Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8]
Output: [2, -2, 33, 78, 12, 5, 8]*/

var t = swi([2, -2, 33, 12, 5, 8], 78, 3)

// function swi(a,e,p){
//     for(var i = 0;i<a.length;i++){
//         if(p>a.length){
//             a='greska'
//         }
//         a[p]=e
//     }
//     return a;
// }

// console.log(t);


function swi(a, b, c) {
    var prvaPolovina = a.splice(c)
    a.push(b)
    var prikaz = a.concat(prvaPolovina)
    return prikaz;
}
console.log(t);



var t = swi([2, -2, 33, 12, 5, 8], 78, 3)

function swi(a, b, c) {
    var desniDeo = a.splice(c);
    a.push(b);
    var prikaz = a.concat(desniDeo)


    return prikaz;
}
console.log(t)

