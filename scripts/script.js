// JavaScript Document
var openButton = document.querySelector("header button:nth-of-type(2)");
// openButton.onclick = openMenu;

openButton.addEventListener('click',openMenu)

function openMenu (){
    var deNav = document.querySelector("header nav");
    deNav.classList.toggle("toonMenu");
    var deLi = document.querySelector("header ul li");
    deLi.classList.toggle("toonMenu");
}

// var sluitButton = document.querySelector("header > button");
// sluitButton.onclick = sluitMenu;

// function sluitMenu (){
//     var deNav = document.querySelector("header nav");
//     deNav.classList.remove("toonMenu");
 
// }
