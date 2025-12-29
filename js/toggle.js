const toggle = document.getElementById("toggle");
const toggle_ball = document.getElementById("toggle-ball");
const sun = document.getElementById("sun");
const moon = document.getElementById("moon");
const navbar = document.getElementById("navbar");

let links = document.querySelectorAll("a");
let headers = document.querySelectorAll("h2");
let parag = document.querySelectorAll("p");
let headers3 = document.querySelectorAll("h3");
let headers4 = document.querySelectorAll("h4");

let dark =[...links,...headers, ...parag, ...headers3,...headers4];

let sections = document.querySelectorAll("section");
let hero = document.getElementById("hero-section");
let foot = document.querySelector("footer");

let skills_content =document.getElementsByClassName("skills-content");
let skill_item = document.getElementsByClassName("skill-item");
let skill_h3 = document.getElementsByClassName("skill-h3");
let project = document.getElementsByClassName("project-item");

let dark_divs =[...skill_item,...skill_h3,...project];

toggle.addEventListener("click",()=>
{
    if(toggle_ball.classList.contains("toggle-ball-on"))
    {
        toggle_ball.classList.remove("toggle-ball-on");
        toggle_ball.classList.add("toggle-ball-off");
        toggle.classList.toggle("toggle-on");
        //  document.body.style.backgroundColor="#3f3f3d";
        document.body.classList.toggle("background-on");
        document.body.classList.toggle("background-off");
        sun.style.display = "none";
        moon.style.display = "block";
        navbar.classList.toggle("navbar-on");


        dark.forEach(el=>{
            el.style.color="white";
        })
        sections.forEach(el=>{
            el.style.backgroundColor="rgb(72, 72, 70)";
            el.style.borderBottom = "2px solid rgb(72,72,80)";
        })
        hero.style.backgroundColor = "#3f3f3d";
        hero.style.borderBottom = "none";
        skills_content.forEach(el=>{
            el.style.backgroundColor="#3f3f3d";
        })
        dark_divs.forEach(el=>{
            el.style.backgroundColor="rgb(72, 72, 70)";
        })
    }
    else{
        toggle_ball.classList.remove("toggle-ball-off");
        toggle_ball.classList.add("toggle-ball-on");
        toggle.classList.toggle("toggle-on");
        // document.body.style.backgroundColor="white";
        document.body.classList.toggle("background-on");
        document.body.classList.toggle("background-off");
        moon.style.display = "none";
        sun.style.display = "block";
        navbar.classList.toggle("navbar-on");


        dark.forEach(el=>{
            el.style.color="black";
        })
        sections.forEach(el=>{
            el.style.backgroundColor="rgba(235, 235, 235, 1)";
            el.style.border = "none";
        })
        sections.forEach(el=>{
            el.style.backgroundColor="rgba(235, 235, 235, 1)";
        })
        hero.style.backgroundColor = "white";
        skills_content.forEach(el=>{
            el.style.backgroundColor="rgba(235, 235, 235, 1)";
        })
        dark_divs.forEach(el=>{
            el.style.backgroundColor="#d8d8d6ff";
        })
        foot.style.backgroundColor="rgba(235, 235, 235, 1)";
    }
    
});