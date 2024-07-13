let tl = gsap.timeline({
    repeat:-1,
});

tl
.to(".image-con",{
    width:"100%",
    ease: Expo.easeInOUt,
    stagger:2,
},'a')
.to(".text h1",{
    ease: Expo.easeInOut,
    stagger:2,
    top:0
},'a')
.to(".text h1",{
    delay:2,
    ease: Expo.easeInOut,
    stagger:2,
    top:"-100%"
},'a')





let tl2 = gsap.timeline({scrollTrigger:{
    trigger:"#page3",
    // markers:true,
    start:"0% 0%",
    end:"100% 0%",
    pin:true,
    scrub:1,
}})

tl2
.to("#p3-inner-page",{
    bottom:0
})

let menu = document.querySelector("#menu h3");
let full = document.querySelector("#full-scr");
let logo = document.querySelector("#logo img");
let flag = 0;



menu.addEventListener("click",function(){
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

