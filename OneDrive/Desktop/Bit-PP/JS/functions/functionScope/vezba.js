//1. Write a function to count vowels in a provided string. Vowels are a, e, i, o, and u as well as A,
//E, I, O, and U.


var rec = vowels('Koliko ima ovde SAMOGLASNIKA');

function vowels(a){
    var brojac = 0;
    for( var i =0;i<a.length;i++){
        if(a[i].toLowerCase() == 'a' || a[i].toLowerCase() == 'e' || a[i].toLowerCase() == 'i' || a[i].toLowerCase() == 'o' || a[i].toLowerCase() == 'u' || ){
            brojac++;
        }
     
    }
    return brojac
}

console.log(rec);


/*2. Write a function that combines two arrays by alternatingly taking elements.
[‘a’,’b’,’c’], [1,2,3] -&gt; [‘a’,1,’b’,2,’c’,3]*/


var  kombinacija  = spajanje(['a','b','c', 'd'],[1,2,3])

function spajanje(a,b){
    var noviNiz = [];
       for(var i = 0;i<a.length;i++){
        noviNiz.push(a[i])
        noviNiz.push(b[i])
    }
    return noviNiz;
}

console.log(kombinacija);


/*3. Write a function that rotates a list by k elements.
For example [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2]*/

var vrteska = promesaj([1,2,3,4,5,6], 2);

function promesaj(a,k){
    var  novi = a.splice(k)
    var noviNiz = novi.concat(a)

    
    return noviNiz;
}


console.log(vrteska);

//4. Write a function that takes a number and returns array of its digits.