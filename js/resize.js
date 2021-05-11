window.onresize = changeHeight;

image1 = document.getElementById('image1');
image2 = document.getElementById('image2');
image3 = document.getElementById('image3');
image4 = document.getElementById('image4');
image5 = document.getElementById('image5');
image6 = document.getElementById('image6');

function changeHeight(){
    test=document.getElementById("image1").offsetHeight;
    image1.style.width=test+"px";
    image2.style.width=test+"px";
    image3.style.width=test+"px";
    image4.style.width=test+"px";
    image5.style.width=test+"px";
    image6.style.width=test+"px";
    if(display==true){
        menu_mobile.style.display="none";
        display=false;
    }
}
