const container=document.querySelector(".container");
const prop=document.querySelector("#proposal");
const gif=document.querySelector("#gif");
const yes_btn=document.querySelector("#yes");
const no_btn=document.querySelector("#no");

yes_btn.addEventListener("click", () =>{
    prop.innerHTML="Yayyeeeeee😍😍, Now get ready for my love beam";
     gif.src = "assets/kiss.gif";
     yes_btn.style.visibility="hidden";
     no_btn.style.visibility="hidden";
});

no_btn.addEventListener("mouseover", () =>{
    const nobtnrect=no_btn.getBoundingClientRect();
    const maxX=window.innerWidth-nobtnrect.width;
    const maxY=window.innerHeight-nobtnrect.height;

    const randomX=Math.floor(Math.random()*maxX);
    const randomY=Math.floor(Math.random()*maxY);

    no_btn.style.left=randomX + "px";
    no_btn.style.top=randomY + "px";
})
