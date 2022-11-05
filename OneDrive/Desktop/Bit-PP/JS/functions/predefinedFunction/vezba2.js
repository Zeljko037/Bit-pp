/*1. Napisati funkciju u JavaScript-u koja na osnovu niza 6 različitih citata i autora,
ispisuje na stranici po jedan citat, ali tako da se citat promeni kada se program
pokrene.*/

function random(a){
var broj = (Math.floor(Math.random() * 12));
var citat  = '';
var autor = '';
    for(var i = 0; i<a.length;i++){
        if(i % 2 == 0){
            citat = a[broj]
            autor = a[broj +1]
        }
        else{
            citat = a[broj-1]
            autor = a[broj]
        }
    }
    i =(Math.floor(Math.random() * 6));

    return citat + "\n"  + autor
}


var c = random(['nikad nisi mladji nago danas', 'Neko sa facebooka',
 'ne moze pammetan da popusti koliko budala moze da zapne', 'Dalej Lama',
 'kafana je moja sudbina', 'Toma',
 'Bolje biti pijan nego star', 'plavi orkestar', 
 'Hakuna matata', 'bradavicasta svinja', 
 'oj mladosti', 'Rados bajic']);

 console.log(c)