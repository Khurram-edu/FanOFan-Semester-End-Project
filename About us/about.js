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