let mas_texto =  document.getElementById("mas_texto");
let leer = document.getElementById("leer");

let more_text = document.getElementById("more_text");
let read = document.getElementById("read")

leer.addEventListener("click", toggleText1);
read.addEventListener("click", toggleText2);

function toggleText1() {
  mas_texto.classList.contains("show");
  if(mas_texto.classList.toggle("show")){
    leer.innerHTML = "Leer Menos"
  }else {
    leer.innerHTML = "Leer Mas"
  }
  
}

function toggleText2() {
  more_text.classList.contains("show");
  if(more_text.classList.toggle("show")){
    read.innerHTML = "Read Less"
  }else {
    read.innerHTML = "Read More"
  }
}



function changeColor(newColor) {
    const elem = document.getElementById('para');
    elem.style.color = newColor;
}


const menuHamIcon=document.querySelector('.menu-ham');
const mobileMenu=document.querySelector('.mobile-menu');


menuHamIcon.addEventListener('click', toggleMobileMenu);
mobileMenu.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu(){
  
  mobileMenu.classList.toggle('inactive');
}
  
let firstHeading = document.querySelector('h1');

console.log(firstHeading);