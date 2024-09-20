// JavaScript Document
var openButton = document.querySelector("header button:nth-of-type(2)");
// openButton.onclick = openMenu;

openButton.addEventListener('click',openMenu)

function openMenu (){
    var deNav = document.querySelector("header nav");
    deNav.classList.toggle("toonMenu");
    // var deLi = document.querySelector("header ul li");
    // deLi.classList.toggle("toonMenu");
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
