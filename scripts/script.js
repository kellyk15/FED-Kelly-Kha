// JavaScript Document
var openButton = document.querySelector("header button:nth-of-type(2)");

openButton.addEventListener('click',openMenu)

// function openMenu (){
//     var deNav = document.querySelector("header nav");
//     deNav.classList.toggle("toonMenu");
// }

var openButton = "true"

function openMenu (){
    var deNav = document.querySelector("header nav");
    var deKnop = document.querySelector ("header button:nth-of-type(2)");


    if (openButton == "true") {
        deNav.classList.add("toonMenu");
        openButton = "false"
        deKnop.classList.add("toonMenu")
    }
    else {
        deNav.classList.remove("toonMenu");
        openButton = "true"  
        deKnop.classList.remove("toonMenu")
    }
}



var headervlak = document.querySelector("header div");

headervlak.addEventListener('click', laadscherm)

function laadscherm (){
    headervlak.classList.add("begin");
}


// var openMenu = true

// function openMenu(){
//     if (openMenu == true){
//         var deNav = document.querySelector("header nav");
//         deNav.classList.add("toonMenu");

//         openMenu = false
//     } else {
//         var deNav = document.querySelector("header nav");
//         deNav.classList.remove("toonMenu");

//         openMenu = true
//     }
// }
