let portfolio = document.getElementById('portfolio');
let parcours = document.getElementById('parcours');
let contact = document.getElementById('contact');

let b_portfolio = document.getElementById('b_portfolio');
let b_parcours = document.getElementById('b_parcours');
let b_contact = document.getElementById('b_contact');

function changeColorMenu() {
    if(document.documentElement.scrollTop>portfolio.offsetTop&&document.documentElement.scrollTop<portfolio.offsetTop+portfolio.offsetHeight){
        b_portfolio.style.backgroundColor="#1abc9c";
    }
    else{
        b_portfolio.style.backgroundColor="transparent";
    }
    if(document.documentElement.scrollTop>parcours.offsetTop&&document.documentElement.scrollTop<parcours.offsetTop+parcours.offsetHeight){
        b_parcours.style.backgroundColor="#1abc9c";
    }
    else{
        b_parcours.style.backgroundColor="transparent";
    }
    if(document.documentElement.scrollTop>contact.offsetTop&&document.documentElement.scrollTop<contact.offsetTop+contact.offsetHeight){
        b_contact.style.backgroundColor="#1abc9c";
    }
    else{
        b_contact.style.backgroundColor="transparent";
    }
}

b_portfolio.addEventListener("mouseover", function( event ) {
    console.log(b_portfolio.style.backgroundColor);
    if(b_portfolio.style.backgroundColor=="transparent"){
        b_portfolio.style.color="#1abc9c";
    }
}, false);
b_portfolio.addEventListener("mouseout", function( event ) {
    b_portfolio.style.color = "white";
}, false);

b_parcours.addEventListener("mouseover", function( event ) {
    if(b_parcours.style.backgroundColor=="transparent"){
        b_parcours.style.color="#1abc9c";
    }
}, false);
b_parcours.addEventListener("mouseout", function( event ) {
    b_parcours.style.color = "white";
}, false);

b_contact.addEventListener("mouseover", function( event ) {
    if(b_contact.style.backgroundColor=="transparent"){
        b_contact.style.color="#1abc9c";
    }
}, false);
b_contact.addEventListener("mouseout", function( event ) {
    b_contact.style.color = "white";
}, false);


window.onload = test;

function test(){
    b_portfolio.style.backgroundColor="transparent";
    b_portfolio.style.backgroundColor="transparent";
    b_contact.style.backgroundColor="transparent";
}