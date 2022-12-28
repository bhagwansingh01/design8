
var tl = gsap.timeline();

tl.from("#loader img",{
    scale:0,
    duration:1.2,
})
tl.to("#loader",{
    y:-1000,
    delay:1,
    duration:1.2,
})

tl.from("#nav",{
    y: -50,  
    duration:0.5,
    opacity:0
})
tl.from("#main h1",{
    opacity:0,
    scale:0,
    duration:0.8
})
tl.from("#text h2", {
    x:-300,
    duration:0.5,
    opacity:0
})
tl.from("#text h5", {
    x:-300,
    duration:0.5,
    opacity:0
},"-=0.4")
tl.from("#text img", {
    x:-300,
    duration:0.5,
    opacity:0
},"-=0.4")
tl.from("#text p", {
    x:-300,
    duration:0.5,
    opacity:0
},"-=0.4")
tl.from("#text button", {
    x:-300,
    duration:0.5,
    opacity:0
},"-=0.5")
tl.from("#foot", {
    y:50,
    duration:0.5,
    opacity:0
})
tl.from("#foot2", {
    y:50,
    duration:0.5,
    opacity:0
},"-=0.5")

tl.from("#main>img", {
    y:50,
    duration:0.5,
    rotateZ:2,
    opacity:0
})




