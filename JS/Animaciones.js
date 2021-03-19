const $observador = document.querySelectorAll(".ob");
const $acerca = document.getElementById("acerca");
const $hobby = document.getElementById("hobby");
const $contacto = document.getElementById("contacto");
const $r = document.getElementById("containerRedes");
const $up = document.querySelector(".icon-circle-up");
let mediaQuery = window.matchMedia("(max-width:720px)")
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
                let xhr = new XMLHttpRequest();
                xhr.addEventListener("readystatechange",(e)=>{
                    if(xhr.readyState != 4)return;
                    if(xhr.status >=200 && xhr.status<300){
                        let res = xhr.responseText;
                        $acerca.innerHTML = res;
                    }
                    else{
                        let message = xhr.statusText||"Ocurrio un error";
                        alert(message);
                    }
                })
                xhr.open("GET","acerca.html");
                xhr.setRequestHeader("Content-type","text/html;charset=utf-8");
                xhr.send();
                $acerca.style.opacity="1";
                $up.style.opacity="1";
            }
        }   
        if(element.target == $hobby){
            if(element.isIntersecting){
                let xhr = new XMLHttpRequest();
                xhr.addEventListener("readystatechange",(e)=>{
                    if(xhr.readyState !=4)return;
                    if(xhr.status >=200 && xhr.status<300){
                        let res = xhr.responseText;
                        $hobby.innerHTML = res;
                        const $intereses = document.querySelectorAll(".container-interes-contenido");
                        int($intereses);
                    }   
                    else{
                        let message = xhr.statusText || "Ocurrio un error";
                        alert(message);
                    }
                })
                xhr.open("GET","hobby.html");
                xhr.setRequestHeader("Content-type","text/html;charset=utf-8");
                xhr.send();
            }
        }    
        if(element.target == $contacto){
            if(element.isIntersecting){
                let xhr = new XMLHttpRequest();
                xhr.addEventListener("readystatechange",(e)=>{
                    if(xhr.readyState != 4)return;
                    if(xhr.status >= 200 && xhr.status <300){
                        let res = xhr.responseText;
                        $contacto.innerHTML = res;
                    }
                    else{
                        let message = xhr.statusText || "Ocurrio un erro";
                        alert(message);
                    }
                })
                xhr.open("GET","contacto.html");
                xhr.setRequestHeader("Content-type","text/html;charset=utf-8");
                xhr.send();
            }
        }
        if(element.target == $r){
            if(element.isIntersecting){
                let xhr = new XMLHttpRequest();
                xhr.addEventListener("readystatechange",(e)=>{
                    if(xhr.readyState !=4)return;
                    if(xhr.status >= 200 && xhr.status < 300){
                        let res = xhr.responseText;
                        $r.innerHTML = res;
                    }
                    else{
                        let message = xhr.statusText || "Ocurrio un error";
                        alert(message);
                    }
                })
                xhr.open("GET","redes.html");
                xhr.setRequestHeader("Content-type","text/html;charset=utf-8");
                xhr.send();
            }
        }
    }); 
}

function int($intereses){
$intereses.forEach(element => {
    element.addEventListener("mouseover",e=>{
        element.style.opacity="1";
        element.style.background="rgb(1, 111, 201,.5)";
    })
});

$intereses.forEach(element => {
    element.addEventListener("mouseout",e=>{
        element.style.opacity="0";
    })
});
}

