/*1. Write a JavaScript function that reverses a number. typeof result of the function should
be “number”.
12345 ->; 54321*/


function reverseInt(n) {
    return parseInt(n.toString().split('').reverse().join(''))
    

}

console.log(reverseInt(12345));

/*2. Write a JavaScript function that returns a passed string with letters in alphabetical order.
Note: Assume punctuation, numbers and symbols are not included in the passed string.
“Webmaster” ->; “abeemrstw”*/

function reverseInt(n) {
   return n.toLowerCase().split('').sort().join('');
  

}

console.log(reverseInt('Webmaster'));

/*3. Write a function to alphabetize words of a given string. Alphabetizing a string means
rearranging the letters so they are sorted from A to Z.
'Republic Of Serbia' -> 'Rbceilpu Of Sabeir'*/

function alphabetizeString(inputString) {
    var array = inputString.split(' ');
    var result = [];
    for(var i = 0; i< array.length; i++) {
        var string = array[i];
        string = string.split('').sort().join('')
        result.push(string);
    }

    return result.join(' ').trim();
}

console.log(alphabetizeString('Republic Of Serbia'));



 /*4. Write a function to split a string and convert it into an array of words.
'John Snow' ->; [ 'John', 'Snow' ]*/

function reverseInt(n) {
    return n.split(' ')
 
 }
 
 console.log(reverseInt('John Snow'));

 /*5. Write a function to convert a string to its abbreviated form.
'John Snow' ->; 'John S.'*/

function signature(str){
var secondStr = str.split(' ')
return secondStr[0] + ' '+ secondStr[1].substring(1,-1) + '.'


}

console.log(signature('John Snow'))

/*6. Write a function that adds string to the left or right of string, by replacing it’s characters.
&#39;0000&#39;, ‘123’, &#39;l&#39; -&gt; &#39;0123&#39;
&#39;00000000&#39;, ‘123’, &#39;r&#39; -&gt; &#39;12300000&#39;*/


function formattedString(pad, inputString, padPosition) {
       if (typeof inputString === 'undefined')
           return pad;
       if (padPosition == 'l') {
           return (pad + inputString).slice(-pad.length);
       } else {
           return (inputString + pad).substring(0, pad.length);
       }
   }
  
   console.log(formattedString('0000', 123, 'l')); // 0123
   console.log(formattedString('00000000', 123, ''));

/*7. Write a function to capitalize the first letter of a string and returns modified string.
'js string exercises' ->; 'Js string exercises'*/

function capitalizeLetter(str){
return str.charAt(0).toUpperCase() + str.slice(1);

}

console.log(capitalizeLetter('js string exercises'))

/*8. Write a function to hide email addresses to protect them from unauthorized users.
'somerandomaddress@example.com' -> 'somerand...@example.com'*/

function mailProtection(str){
   
    return str.substring(0,8) + '...'+ str.slice(17)
}

console.log(mailProtection('somerandomaddress@example.com'))



function hideEmail(str) {
    var indexAt = str.indexOf("@");
    var email = str.substring(0, indexAt - 3) + "..." + str.slice(indexAt, str.length);
    return email
}

console.log(hideEmail("somerandomaddress@example.com"));

/*9. Write a program that accepts a string as input and swaps the case of each character. For
example, if you input 'The Quick Brown Fox', the output should be 'tHE qUICK bROWN fOX'.
var UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var LOWER = 'abcdefghijklmnopqrstuvwxyz';
'The Quick Brown Fox' -> 'tHE qUICK bROWN fOX';*/

function switchCase(array){
    var upperCheck = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    var result = ''
    for(var i =0;i<array.length;i++){
        if(array[i] == ' '){
            result+= ' '
        }
        for(var j = 0;j<upperCheck.length;j++){
            
            if(array[i] == upperCheck[j]){
                result+= array[i].toLowerCase()
            }
            else if(array[i] == upperCheck[j].toLowerCase()){
                result+=upperCheck[j]
            }
            
        }
    }
    return result
}

console.log(switchCase('The Quick Brown Fox'))

