const cuerpo = document.querySelectorAll(".cuerpo");
let id;
let grado = 1;
const carga = document.getElementById("carga");
id = setInterval(()=>{
    carga.style.zIndex="10000";
    carga.style.transform=`rotate(${grado}deg)`;
    grado++;
},10)

document.addEventListener("DOMContentLoaded",(e)=>{
    clearInterval(id);
    document.querySelector(".carga").style.display="none";
})