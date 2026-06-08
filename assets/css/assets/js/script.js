window.addEventListener("scroll",()=>{

document.querySelectorAll(".card").forEach(card=>{

let position=card.getBoundingClientRect().top;

if(position<window.innerHeight-100){

card.style.opacity="1";
card.style.transform="translateY(0px)";

}

});

});
