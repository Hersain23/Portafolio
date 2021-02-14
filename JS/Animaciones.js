const $observador = document.querySelectorAll(".observador");
const $acerca = document.getElementById("acerca"),
$yo=document.getElementById("yo"),
$titulo = document.querySelectorAll(".titulo"),
$contenidoTexo = document.querySelectorAll(".contenido-texto");
const $habilidades = document.getElementById("habilidades");
const $empleos = document.getElementById("empleos");
const options = {
    root:document.getElementById("container"),
    threshold:.45
};
const observador = new IntersectionObserver(call,options);

$observador.forEach(element =>{
    observador.observe(element);
});

function call(entries){
    entries.forEach(element => {
        let v = element;
        if(element.isIntersecting){
            $titulo[0].style.opacity="1";
            $contenidoTexo[0].style.opacity="1"
            $yo.style.opacity="1";
            $yo.style.transform="translate(10px,0px)"
            $yo.style.transform="scale(1.3,1.3)"
        }
        if(v.target == $habilidades){
            if(v.isIntersecting){
                $habilidades.style.opacity="1"
                $titulo[1].style.opacity="1" 
            }
        }
        if(v.target == $empleos){
            if(v.isIntersecting){
                $empleos.style.opacity="1"
                $titulo[1].style.opacity="1";
                $titulo[2].style.opacity="1";
                $titulo[3].style.opacity="1";
                $titulo[4].style.opacity="1";
                $contenidoTexo[1].style.opacity="1"
                $contenidoTexo[2].style.opacity="1"
            }
        }
    });
}