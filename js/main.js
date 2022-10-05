let mas_texto =  document.getElementById("mas_texto");
let leer = document.getElementById("leer");

let more_text = document.getElementById("more_text");
let read = document.getElementById("read")

leer.addEventListener("click", toggleText);
read.addEventListener("click", toggleText);

function toggleText() {
  mas_texto.classList.contains("show");
  if(mas_texto.classList.toggle("show")){
    leer.innerHTML = "Leer Menos"
  }else {
    leer.innerHTML = "Leer Mas"
  }
  more_text.classList.contains("show");
  if(more_text.classList.toggle("show")){
    read.innerHTML = "Read Ress"
  }else {
    read.innerHTML = "Read More"
  }
}

function changeColor(newColor) {
    const elem = document.getElementById('para');
    elem.style.color = newColor;
  }
  
let firstHeading = document.querySelector('h1');

console.log(firstHeading);