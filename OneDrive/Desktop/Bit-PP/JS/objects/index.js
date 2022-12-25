/*1. Create an object that represents your favourite coffee. Please include coffee name,
strength, flavour, milk, sugar, … everything you like!*/

var kafa = {
    ime: 'Duza sa mlekom',
    jacina: 'srednja',
    ukus: 'sladja',
    secer: 'malo',
    vreme: 'pola sata',

 };
 
 console.log(kafa);

 /*2. Create an object that represents your favourite movie. Please include title, actors,
director, genre, popularity.*/

var film = {
    ime: 'The Intouchables',
    zanr: 'drama',
    zemlja: 'francuska',
    ocena: '8.5',
    vreme: 'dva sata',

 };
 
 console.log(film);

/* 3. Write a function that creates an object that represents a project. Each project is
described by: description, programming language, git repository, boolean status that
says if the project is in development or not. Add a method that prints out the project&#39;s
repository, a method that checks if the project is written in JavaScript as well as a
method that checks if the project is in development or not.*/


var programi = {

    drustvenaMreza: {
       opis: "poslovna drustvena mreza",
       programskiJezik: "JS",
       git: "Nelt razvoj",
      gotovo: false,
       prikaz: function(){
        return this.programskiJezik + ' ' + this.gotovo
       }
     } ,
     naplata: {
        opis: "program za pracenje naplate",
        programskiJezik: "Java",
        GIt: "potrazivanja",
        status: "complete",
      }  ,
      novaGodina: {
        opis: "spisak restorana za Novu",
        programskiJezik: "JS",
        GIt: "Party-manijak",
        status: "u razvoju",
      }   
 };


 console.log(programi.drustvenaMreza,'\n', programi.drustvenaMreza.prikaz())

 
 function representObject(descr, pLanguage, git, isDeveloping) {
    projekat = {
        description: descr,
        programmingLanguage: pLanguage,
        gitRepository: git,
        InDevelopment: isDeveloping,
        isJavascript: function () {
            if (pLanguage == "JS" || pLanguage == "js" || pLanguage == "javascript") {
                console.log("the project is written in JS")
            } else {
                console.log("the project is not written in JS")
            }
        },
        isDeveloped: function () {
            if (isDeveloping == true) {
                console.log("The project is in development")
            }
            else {
                console.log("The project is not in development")
            };
        }
    };
    return projekat
}

var projekat = representObject("test", "JS", "www.test.com", true)

console.log(projekat);

projekat.isJavascript();
projekat.isDeveloped();
