const cuerpo = document.querySelectorAll(".cuerpo");
let idcarga;
let grado = 1;
const carga = document.getElementById("carga");
idcarga = setInterval(()=>{
    carga.style.zIndex="10000";
    carga.style.transform=`rotate(${grado}deg)`;
    grado++;
},10)

document.addEventListener("DOMContentLoaded",(e)=>{
    clearInterval(idcarga);
    document.querySelector(".carga").style.display="none";
})