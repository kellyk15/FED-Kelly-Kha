// JavaScript Document
var openButton = document.querySelector("header > button");
// openButton.onclick = openMenu;

openButton.addEventListener('click',openMenu)

function openMenu (){
    var deNav = document.querySelector("header nav");
    deNav.classList.toggle("toonMenu");

}

// var sluitButton = document.querySelector("header > button");
// sluitButton.onclick = sluitMenu;

// function sluitMenu (){
//     var deNav = document.querySelector("header nav");
//     deNav.classList.remove("toonMenu");
 
// }
