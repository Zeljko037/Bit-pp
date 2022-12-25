/*1. Create a function that takes an array of objects (groceries) which calculates the total
price and returns it as a number. A grocery object has a product, a quantity and a price,
for example:
{
''product': 'Milk';,
'quantity': 1,
'price': 1.50
}*/

function totalPrice (inputArray = []) {
    if (!inputArray || inputArray.length == 0) {
        return 0;
    }

    var sum = 0;
    for(var i = 0; i<inputArray.length;i++) {
        var element = inputArray[i];
        sum+= inputArray[i].price * element.quantity;
    }

    return sum;
}

console.log(totalPrice([{name:'Milk', price: 100, quantity:3}, {name:'Salt', price: 100, quantity:3}, {name:'Sugar', price: 100, quantity:3}]));

/*2. You go to a jewelry shop and try to find the most expensive piece of jewelry. You write
down the name of each piece of jewelry and its price. Create a function that gets the
name of the piece of jewelry with the highest price and returns 'The most expensive
one is the {name of jewelry piece}'.
Example:
mostExpensive([{name:’DiamondEarings’, price: 980}, {name:’Gold watch’, price:250},
…])
- The most expensive one is the diamond Ring.*/

function mostExpensive(niz){
    if (!niz || niz.length == 0) {
        return 0;
    }
    var max = 0;
    var a;
    for(i=0;i<niz.length;i++){
        if(max<niz[i].price){
            max = niz[i].price
            a = niz[i].name
        }
    }
    return 'The most expencive jewelry is '+ a;
 

}

console.log(mostExpensive([{name:'ring', price: 300},{name:'DiamondEarings', price: 980}, {name:'Gold watch', price:250},{name:'watch', price: 600} ]))


/*3. Given a word, create an object that stores the indexes of each letter in an array. Make
sure the letters are the keys. Make sure the letters are symbols. Make sure the indexes
are stored in an array and those arrays are values.
Examples:
mapLetters('dodo') ➞ { d: [0, 2], o: [1, 3] }
mapLetters('froggy') ➞ { f: [0], r: [1], o: [2], g: [3, 4], y: [5] }*/


function brojac(input){
    var slovo={}
    for(i=0;i<input.length;i++){
        if(input[i] != slovo){
            slovo+=input[i];
            mesto.push([i])
           
            console.log(typeof slovo)
            

        }
    }
    console.log(mesto)


}

console.log(brojac('dodo'))


function mapLetters(word='') {
    if(!word || word.length == 0) {
        return null;
    }

    var result = {};

    for(var i = 0; i<word.length;i++) {
        if (result[word[i]]) {
            continue;
        }

        var indexArray = [i];
        for(var j = 0; j<word.length;j++) {
            if(word[i] == word[j] && i != j) {
                indexArray.push(j)
            }
        }
        

        result[word[i]] = indexArray;
    }

    return result;
}

console.log(mapLetters('Hello'))


/*4. And who cursed the most in the fight between you and your spouse? Given an object
with three rounds, with nested objects as your scores per round, return a string of who
cursed the most: If you, return &quot;ME!&quot; If your spouse, return &quot;SPOUSE!&quot; If a draw, return
&quot;DRAW!&quot;
Examples:
determineWhoCursedTheMost([{me: 10, spouse: 5 }, { me: 5, spouse: 10 },
{ me: 0, spouse: 10, }]) ➞ 'DRAW';
determineWhoCursedTheMost([{me: 40,spouse: 5}, {me: 9, spouse: 10}, { me: 9,
spouse: 10}]) ➞ 'ME'
determineWhoCursedTheMost([{ me: 10,spouse: 5 }, { me: 9, spouse: 44 }, { me: 10,
spouse: 55}]) ➞ 'SPOUSE'*/

function determineWhoCursedTheMost(inputArray) {
    if (!inputArray || inputArray.length == 0) {
        return 0;
    }
    var prvi = 0;
    var drugi = 0;
    var prikaz = '';
    
    for(i=0;i<inputArray.length;i++){
        prvi+=inputArray[i].me
        drugi+=inputArray[i].spouse
        console.log(drugi);
    }
        if(prvi>drugi){
            prikaz='ME'
        }
        else if(prvi<drugi){
            prikaz='SPOUSE'
        }
        else if(prvi=drugi){
            prikaz='DRAW'   
        }
    return prikaz;
}

console.log(determineWhoCursedTheMost([{ me: 10,spouse: 5 }, { me: 85, spouse: 44 }, { me: 10,spouse: 55}]));
