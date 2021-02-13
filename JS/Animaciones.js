const $observador = document.querySelectorAll(".observador");
const $acerca = document.getElementById("acerca"),
$yo=document.getElementById("yo"),
$titulo = document.querySelector(".titulo"),
$contenidoTexo = document.querySelector(".contenido-texto");

const options = {
    root:document.getElementById("container"),
    threshold:1
};
const observador = new IntersectionObserver(call,options);

$observador.forEach(element =>{
    observador.observe(element);
});

function call(entries){
    entries.forEach(element => {
        if(element.isIntersecting){
            $titulo.style.opacity="1";
            $contenidoTexo.style.opacity="1"
            $yo.style.opacity="1";
            $yo.style.transform="translate(10px,0px)"
            $yo.style.transform="scale(1.3,1.3)"
        }
    });
}