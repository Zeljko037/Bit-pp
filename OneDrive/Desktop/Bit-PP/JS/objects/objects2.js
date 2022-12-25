/*1. Write a functional expression that duplicates each element of a given array.
Input: [2, 4, 7, 11, -2, 1]
Output: [2, 2, 4, 4, 7, 7, 11, 11, -2, -2, 1, 1]*/

function double(a) {
    // if (!array || array.length === 0) {
    //     return 0;
    // }
    
    var duplicates = a.flatMap(i => [i, i]);
    console.log(duplicates)
    return duplicates;
}

console.log(double([2, 4, 7, 11, -2, 1]));

// a = [1, 2, 3, 4];
// var c = a.flatMap(i => [i, i])
// console.log(c)


function double(array = []){
    if (!array || array.length === 0) {
        return 0;
    }
    var duplicates =[];
    for(var i=0;i<array.length;i++){
        duplicates.push(array[i]);
        duplicates.push(array[i]);
      
       
    }
    return duplicates
}
console.log(double([2, 4, 7, 11, -2, 1]));



/*2. Write a functional expression that removes all duplicates in a given array.
Input: [8, 13, 8, 9, 12, 8, 1, 1, 4, 13]
Output: [1, 4, 8, 9, 12, 13]*/


function duplicatesFilter(array=[]){
    if(!array || array.length===0){
        return 0;
    }
    var result =[];
    for(var i=0;i<array.length;i++){
        if (result[array[i]]) {
            continue;
            console.log()
        }
       
        for(var j=0;j<array.length;j++){
            if(array[i] != array[j]){
                result.push[j];

            }
        }
    }
    return result;
}

console.log(duplicatesFilter([8, 13, 8, 9, 12, 8, 1, 1, 4, 13]))



