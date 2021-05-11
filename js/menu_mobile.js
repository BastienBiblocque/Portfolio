var display = false;

let menu_mobile = document.getElementById('menu_mobile');
let bouton = document.getElementById('button_mobile');


bouton.onclick = function show_menu(){
    if(display==false){
        document.getElementById("menu").style.height = "100px";
        var h = window.innerHeight;
        h=h-100;
        menu_mobile.style.height=h+"px";
        menu_mobile.style.display="block";
        display=true;
    }
    else if(display==true){
        menu_mobile.style.display="none";
        display=false;
    }
}

