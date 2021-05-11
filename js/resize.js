window.onresize = changeHeight;

image1 = document.getElementById('image1');
image2 = document.getElementById('image2');

function changeHeight(){
    test=document.getElementById("image1").offsetHeight;
    image1.style.width=test+"px";
    image2.style.width=test+"px";
    if(display==true){
        menu_mobile.style.display="none";
        display=false;
    }
}