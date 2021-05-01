const $botonBurger = document.querySelector(".botonBurger"),
$menu = document.querySelector(".menu-despegable-ul-li"),
$liMenu = document.querySelectorAll(".menu-despegable-ul-li > li");

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


