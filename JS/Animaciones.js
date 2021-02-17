const $observador = document.querySelectorAll(".ob");
const $acerca = document.getElementById("acerca");
const $intereses = document.querySelectorAll(".container-interes-contenido");
const options = {
    root:document.getElementById("container"),
    threshold:.45
};
const observador = new IntersectionObserver(call,options);
$observador.forEach(element => {
    observador.observe(element);
});
function call(entries){
    entries.forEach(element => {
        if(element.target == $acerca){
            if(element.isIntersecting){
                $acerca.style.opacity="1";
            }
        }       
    });
    
}

$intereses.forEach(element => {
    element.addEventListener("mouseover",e=>{
        element.style.opacity="1"
        element.style.background="rgb(1, 111, 201,.5)"
    })
});

$intereses.forEach(element => {
    element.addEventListener("mouseout",e=>{
        element.style.opacity="0"
    })
});

