let expresionAsunto = /[0-9,\W]/gi;
let expresionCorreo = /[a-z,0-9,._-]+@[a-z,0-9]+\.[a-z]/gi;
const $form = document.getElementById("form");
const d = document;

d.addEventListener("submit",e=>{
    e.preventDefault();
    if(expresionAsunto.test($form.asunto.value) && expresionCorreo.test($form.correo.value) || $form.asunto.value=="" && $form.correo.value==""){
        $form.asunto.style.border="2px solid red"
        $form.correo.style.border="2px solid red"
    }else{
        fetch("https://formsubmit.co/ajax/dguarnerosmarquez@gmail.com",{
            method:"POST",
            body: new FormData($form)
        })
        .then(res=> res.ok ? res.json():Promise.reject(res))
        .then(json =>{
            alert("Se envio correctamente la informacion")
            clearForm();
        })
        .catch(err => {
            console.log(`Ocurrio un error ${err}`);
        })
    }
})

function clearForm(){
    $form.asunto.value="";
    $form.correo.value="";
    $form.mensaje.value="";
    $form.asunto.style.border ="0px solid black"
    $form.correo.style.border ="0px solid black"
}