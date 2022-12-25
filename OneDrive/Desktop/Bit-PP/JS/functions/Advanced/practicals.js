/*1. Write a function that checks if a given string contains digit 5.
Input: “1b895abd”
Output: true
Input: “1bser9re”
Output: false*/

var result = (

    function (provera, unos) {
        for (i = 0; i < provera.length; i++) {
            if (provera[i] == unos)
                return true;
        }
        return false;

    }
)('1b895abd', 5)

console.log(result)

/*provera.includes(Element)*/

/*2. Write a function that in a given string replaces all the appearances of the string ‘JS’ with
‘**’.
Input: “Programming in JS is super interesting!”
Output: “Programming in ** is super interesting!”*/

function replace(sentence, element, replacement) {
    if (!sentence || sentence.length == 0 || !element || element.length == 0 || !replacement || replacement.length != 1) {
        return sentence;
    }

    var replacementString = '';
    for (var i = 0; i < element.length; i++) {
        replacementString += replacement;
    }

    var result = '';
    for (var i = 0; i < sentence.length; i++) {
        var z = i;
        var word = '';
        for (var j = 0; j < element.length; j++) {
            if (sentence[z]) {
                word += sentence[z];
                z++;
            }
        }

        if (word.toLowerCase() == element.toLowerCase()) {
            result += replacementString;
            i += (element.length - 1)
        } else {
            result += sentence[i];
        }
    }

    return result;
}

console.log(replace('Programming in JS is super interesting!', 'super', '*'))


/*3. Write a function that inserts a given character on a given position in the string.
Input: “Goo morning”, 4, ‘d’
Output: “Good morning”*/

function insert(sentence, position, character) {
    if (!sentence || sentence.length == 0 || !position || position.length == 0 || position > sentence.length || !character || character.length == 0) {
        return sentence;
    }
    var result = "";
    for (var i = 0; i < sentence.length; i++) {
        if (i != position - 1) {
            result += sentence[i]
        } else {
            result += character
            result += sentence[i]
        }
    } return result
}
console.log(insert("Goo morning", 4, "d"));

/*4. Write a function that deletes a character from the given position in the string.
Input: “Goodd morning!”, 3
Output: “Good morning!”*/

function brisi(sentence, position) {
    if (!sentence || sentence == 0 || !position || position == 0) {
        return sentence
    }
    var novi = ''
    for (i = 0; i < sentence.length; i++) {
        if (i != position) {
            novi += sentence[i]
        }
        else { continue }
    }
    return novi;
}

console.log(brisi('Goodd Morning', 3))





/*5. Write a function that deletes every second element of the given array.
Input: [3, 5, 1, 8, 90, -4, 23, 1, 67]
Output: [3, 1, 90, 23, 67]*/

function niz(a) {
    var c = [];
    for (var i = 0; i < a.length; i++) {

        if (i % 2 == 0) {
            c.push(a[i])
        }
    }
    return c
}
console.log(niz([3, 5, 1, 8, 90, -4, 23, 1, 67]))


/*6. Write a function that replaces the elements of the given array between two positions with
their doubled values.
Input: [3, 5, 1, 8, 90, -4, 23, 1, 67], 2, 6
Output: [3, 5, 2, 16, 180, -8, 46, 1, 67]*/

function uvecaj(niz, pocetak, kraj) {
    if (!niz || niz == 0 || !pocetak || pocetak == 0 || !kraj || kraj == 0) {
        return kraj;
    }
    var nov = [];
    for (i = 0; i < niz.length; i++) {
        if (i <= pocetak || i > kraj) {
            nov.push(niz[i])
        }
        else {
            nov.push(niz[i] * 2)
        }

    }
    return nov;
}

console.log(uvecaj([3, 5, 1, 8, 90, -4, 23, 1, 67], 2, 6))

/*7. Write a function that checks if every element of the first array is contained in the second
array. Be careful with repetitions!
Input: [3, 4, 1, 3], [8, 9, 3, 1, 11, 4, 3]
Output: true*/

function provera(baza, niz) {
    var test = false;
    var element = []
    for (i = 0; i < baza.length; i++) {
        for (j = 0; j < niz.length; j++) {
            if (baza[i] == niz[j]) {


                element.push(niz[j])
                break

            }

        }
    }
    if (toString(element) === toString(baza)) {

        test = true;
    }
    console.log(baza , element)
    return element

}

console.log(provera([3, 4, 6, 3], [8, 9, 3, 1, 11, 4, 3]))


/*8. Write a function that sorts an array of strings by the number of appearances of the letter
‘a’ or ‘A’.
Input: [‘apple’, ‘tea’, ‘amazing’, ‘morning’, ‘JavaScript’]
Output: [‘morning’, ‘apple’, ‘tea’, ‘JavaScript’, ‘amazing’]*/

function redjaj(a){
    var noviNiz = a.sort()
    
    console.log(noviNiz)
}

console.log(redjaj(['apple', 'tea', 'amazing', 'morning', 'JavaScript']))


/*9. Write a function that prints out the date of the next day.
Output: 25. 10. 2018.*/


/*10. Write a function that prints out the date of the previous day.
Output: 23. 10. 2018.*/


