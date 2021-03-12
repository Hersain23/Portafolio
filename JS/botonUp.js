let up = document.querySelector(".up");
let id;
window.addEventListener("scroll",scroleo);
function scroleo(e){
    if(window.scrollY>100){
        up.style.opacity="1";
    }
    else if(window.scrollY < 10){
        up.style.opacity="0";
        clearInterval(id)
    }
}

up.addEventListener("click",oyente);

function oyente(e){
    id = setInterval((e)=>{
        let y = window.scrollY;
        y = y-40;
        scroll(0,y);
    },50)
}
