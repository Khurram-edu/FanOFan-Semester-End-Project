function menuBtn (){
    let menu =document.querySelector("#menu h3");
    let full =document.querySelector("#full-scr");
    let logo =document.querySelector("#logo img");
    let flag = 0;


  menu.addEventListener("click", function(){
    if(flag == 0){
        full.style.right = 0;
        logo.style.opacity = 0;
        flag = 1;
    }
    else{
        full.style.right = "-100%";
        logo.style.opacity = 1;
        flag = 0;
    }
})
}
menuBtn ()

function firstpage(){
    let tl = gsap.timeline({
        scrollTrigger:{
            trigger:"#p1-inner",
            start:"50% 50%",
            end:"100% 50%",
            scrub:1, 
            pin:true
        }
    })
    tl
    .to("#inner-top",{
        top:"-50%"
    },'a')
    .to("#inner-bottom",{
        bottom:"-50%"
    },'a')
    .to("#top-h",{
        top:"90%"
    },'a')
    .to("#bottom-h",{
        top:"-55%"
    },'a')
    .to("#sec",{
        bottom:0,
        opacity:1
    },'a')
}

firstpage ()

function textanim(){
    let tl2 = gsap.timeline({
        scrollTrigger:{
            trigger:"#page2",
            start:"50% 85%",
            end:"90% 50%",
            scrub:2,
        }
    })
    tl2
    .to(".text-area-top",{
        width:"100%"
    })
}
textanim ()
