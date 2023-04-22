function Event() {
    if (document.getElementById("nome").value != "" && document.getElementById("email").value != ""  && document.getElementById("texto").value != "") {
     alert("Prontinho");
   } else {
     alert("Por favor, preencha todos os campos");
   }
   }

let links = document.getElementById("links");
links.addEventListener("mouseover", Mouse)  
links.addEventListener("mouseout", Mouse1)

function Mouse(){
    links.style.color="red";
}
function Mouse1(){
    links.style.color="";
}






