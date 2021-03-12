const $botonBurger = document.querySelector(".botonBurger"),
$menu = document.querySelector(".menu-despegable-ul-li"),
$liMenu = document.querySelectorAll(".menu-despegable-ul-li > li");
let media = matchMedia("(max-width:720px)");
let media2 = matchMedia("(max-width:721px)");
let click=1;

$botonBurger.addEventListener("click",(e)=>{
    click++;
    if(click%2==0){
    $liMenu.forEach(element => {
        element.style.display="inline-flex";    
    });
    $menu.style.width="80%";
    }
    else{
        $liMenu.forEach(element => {
            element.style.display="none";    
        });
        $menu.style.width="0%";
    }
})
$liMenu.forEach(element => {
    element.addEventListener("click",()=>{
        $liMenu.forEach(element => {
            element.style.display="none";    
        });
        $menu.style.width="0%";
    })
});

if(media.matches){
    document.addEventListener("DOMContentLoaded",(e)=>{
        let xhr = new XMLHttpRequest();
        document.addEventListener("readystatechange",(e)=>{
            if(xhr.readyState != 4)return;
            if(xhr.status >= 200 && xhr.status <300){
                let res = xhr.responseText;
                document.getElementById("contacto").innerHTML = res;
                console.log(res);
            }
            else{
                let err = xhr.statusText||"Ocurrio un error";
                alert(err)
            }
        })
        xhr.open("GET","contactoQuery.html");
        xhr.setRequestHeader("Content-type","text/html;charset=utf-8");
        xhr.send();
    })
}
if(media2.matches){
    document.addEventListener("DOMContentLoaded",(e)=>{
        let xhr = new XMLHttpRequest();
        document.addEventListener("readystatechange",(e)=>{
            if(xhr.readyState != 4)return;
            if(xhr.status >= 200 && xhr.status <300){
                let res = xhr.responseText;
                document.getElementById("contacto").innerHTML = res;
                console.log(res);
            }
            else{
                let err = xhr.statusText||"Ocurrio un error";
                alert(err)
            }
        })
        xhr.open("GET","contacto.html");
        xhr.setRequestHeader("Content-type","text/html;charset=utf-8");
        xhr.send();
    })
}
