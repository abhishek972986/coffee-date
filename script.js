let nav  = gsap.timeline();
nav.from(".nav .up", {
    opacity:0,
    y:50,
    duration:0.7,
    stragger:1,

})
nav.from(".nav .down", {
    opacity:0,
    y:-50,
    duration:0.7,
    stragger:1,

})
nav.to(".nav img",{
    rotate:360,
    repeat:-1,
    duration:2,
    ease:"none"
})

gsap.from(".left",{
    x:-60,
    opacity:0,
    duration:2,
    stragger:1
    
})
gsap.from(".right",{
    x:60,
    opacity:0,
    duration:2,
    stragger:1
    
})
gsap.to(".right img",{
    rotateX:"10deg",
    rotateZ:"30deg",
    duration:2,
    yoyo:true,
    // repeat:1,
    ease:"bounce.out"
})

gsap.to(".right img", {
    transform:"translate(-120%,140%)",
    // transform:"translateY(-90%)",
    rotate:360,
    duration:2,
    scrollTrigger:{
        trigger:".page2",
        sroller:"body",
        //markers:true,
        start:"top 50%",
        end:"top 0%",
       scrub:2
    }
})

let img = document.querySelector(".navbar img");
img.addEventListener("mouseenter",()=>{
    gsap.to(img,{
        rotate:0,
        duration:0.2,
        ease:"none",
      
    })
    
})


let tl = gsap.timeline();
tl.from(".asking h1", {
    y:60,
 opacity:0,
    rotate:360,
    duration:1,
    scrollTrigger:{
        trigger:".page2",
        sroller:"body",
        //markers:true,
        start:"top 50%",
        end:"top 0%",
       scrub:2
    }
})
gsap.from(".asking p", {
    y:80,
 opacity:0,
   ease:"none",
    duration:6,
    scrollTrigger:{
        trigger:".page2",
        sroller:"body",
        //markers:true,
        start:"top 50%",
        end:"top -18%",
       scrub:2
    }
});




