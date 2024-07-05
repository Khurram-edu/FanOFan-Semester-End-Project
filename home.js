let tl = gsap.timeline({scrollTrigger:{
    trigger:"page1",
    // markers:true,
    start:"50% 50%",
    end:"50% 0%",
    scrub:2,

}})
tl
.to("#box-1",{
    rotate:"-7deg",
},'a')
.to("#box-2",{
    scale:"1.05"
},'a')
.to("#box-3",{
    rotate:"7deg"
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