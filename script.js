let time = document.getElementById("times");
setInterval(() => {
  var currentDate = new Date();
  time.innerHTML = currentDate.getHours() + " : " + currentDate.getMinutes() + " : " + currentDate.getSeconds();
}, 0);


var tl = gsap.timeline();

window.addEventListener("load", () => {

  tl.from("nav", {
    y: -100,
    duration: 0.5,
    delay: 0.5,
    stagger: 0.5,
    opacity: 0
  })

  tl.from(".first span, .second h1", {
    y: 100,
    duration: 0.5,
    stagger: 0.5,
    opacity: 0,

  })

  tl.from(".icon  ", {
    y: 100,
    duration: 0.5,
    stagger: 0.5,
    opacity: 0

  })
  tl.from(" .button, .btns img", {
    transform:"scale(0)",
    duration: 0.5,
    stagger: 0.5,
    opacity: 0,

  })


})


// offcanvas timeline
var navBtn = document.getElementById("nav-btn");
var offcanvass = document.querySelector(".offcanvass");
var closeBtn = document.querySelector(".close-btn");
var offcanvassstl = gsap.timeline();
gsap.set(offcanvass,
  {
   y:"-100%",
   
  });

navBtn.addEventListener("click", () => {
  gsap.to(offcanvass , {
   y:"0%",
    ease:"power2.out",
    duration:1,

  })
  offcanvassstl.from(".offcanvas-body .close-btn img , .home h3, .offcanvas-icon .left .inner-left, .offcanvas-icon .right .slide", {
     y:100,
     duration:0.4,
     stagger:0.4,
     ease:"power2.inout"
  })

})
closeBtn.addEventListener("click", () => {
  gsap.to(offcanvass , {
    y:"-100%",
    duration:1
  })
})





// offcanvas circle button//
var buttons = document.getElementById("offcanvassbtn");

buttons.addEventListener("mousemove", function (event) {
  buttons.style.backgroundColor = "#fff";
  buttons.style.color = "#000";
  // Get the coordinates of the cursor relative to the button
  var buttonRect = this.getBoundingClientRect();
  var x = event.clientX - buttonRect.left;
  var y = event.clientY - buttonRect.top;

  // Adjust the movement by scaling down the cursor position
  var moveX = (x - buttonRect.width / 2) / 2; // Adjust this value to control the movement range horizontally
  var moveY = (y - buttonRect.height / 2) / 2; // Adjust this value to control the movement range vertically

  // Update the position of the button
  this.style.transform = "translate(" + moveX + "px, " + moveY + "px)";
  // console.log(buttons);
});

// Reset button position when mouse leaves
buttons.addEventListener("mouseleave", function () {
  this.style.transform = "translate(0, 0)";
  buttons.style.backgroundColor = "black";
  buttons.style.color = "white";


});

// scroll about section

document.getElementById('offcanvassbtn').addEventListener('click', function () {
  document.getElementById('aboutsection').scrollIntoView({ behavior: 'smooth' });
});

// hero page

var x=new Typed(".typing",{
  strings:["DESIGNER", "DEVELOPER","CODER"],
  typeSpeed:150,
  backSpeed:150,
  loop:true
})

// zoom effect on image

var aboutSectionImg = document.getElementById("aboutsection");
var zoomImg = document.querySelector(".zoom-img");

  // Get the zoom section and image element


  // Add an event listener for the scroll event
  window.addEventListener('scroll', function() {
    // Get the position of the zoom section relative to the viewport
    const sectionPosition = aboutSectionImg.getBoundingClientRect();

    // Check if the section is in the viewport
    if (sectionPosition.top < window.innerHeight && sectionPosition.bottom > 0) {
      // Calculate the zoom scale based on the scroll position within the section
      const scrollPosition = window.scrollY;
      const maxZoom = 2; // Maximum zoom level (2x)
      const zoomScale = 1 + (scrollPosition - aboutSectionImg.offsetTop) / 1000;

      // Apply the zoom effect if within limits
      if (zoomScale <= maxZoom) {
        zoomImg.style.transform = `scale(${zoomScale})`;
      }
    } else {
      // Reset the zoom when out of the section
      zoomImg.style.transform = `scale(1)`;
    }
  });



  // projects

  var projects = document.querySelectorAll(".abc");
  var firstproject = document.querySelector(".first-project");
  var secondproject = document.querySelector(".second-project");
  var thirdproject = document.querySelector(".third-project");
  var fourthproject = document.querySelector(".fourth-project");
  var backprojects = document.querySelector(".project");

  var cursors = document.getElementById('cursor');
  projects.forEach((project)=>{
    project.addEventListener('mousemove', function(e) {
    cursors.style.opacity =1;
      var x = e.clientX + window.pageXOffset + 4;
      var y = e.clientY + window.pageYOffset + 4;
      cursors.style.top = y + 'px';
      cursors.style.left = x + 'px';
      });
       project.addEventListener('mouseleave', function() {
        cursors.style.opacity = 0;
      });
    });
    
    // firstproject.addEventListener("mouseenter", ()=>{
    //   backprojects.style.backgroundColor = "#f2c126";
    // })
    // firstproject.addEventListener("mouseleave", ()=>{
    //   backprojects.style.backgroundColor = "transparent";
    // })

    // secondproject.addEventListener("mouseenter", ()=>{
    //   backprojects.style.backgroundColor = "red";
    // })
    // secondproject.addEventListener("mouseleave", ()=>{
    //   backprojects.style.backgroundColor = "transparent";
    // })
    // thirdproject.addEventListener("mouseenter", ()=>{
    //   backprojects.style.backgroundColor = "green";
    // })
    // thirdproject.addEventListener("mouseleave", ()=>{
    //   backprojects.style.backgroundColor = "transparent";
    // })
    // fourthproject.addEventListener("mouseenter", ()=>{
    //   backprojects.style.backgroundColor = "orange";
    // })
    // fourthproject.addEventListener("mouseleave", ()=>{
    //   backprojects.style.backgroundColor = "transparent";
    // })


// footer mail 
    var first = document.getElementById("gmail");
  var gmail= document.getElementById("cursor2");

  first.addEventListener('mousemove', (j)=>{
    gmail.style.opacity = 1;
      var x = j.clientX + window.pageXOffset + 4;
      var y = j.clientY + window.pageYOffset + 4;
      gmail.style.top = y + 'px';
      gmail.style.left = x + 'px';
      });
       first.addEventListener('mouseleave', function() {
        gmail.style.opacity = 0;
      });
   
    
  
  // project heading horizontally scroll
    gsap.to(".projects .move h1",{
       x:"-100%",
       ease: "none",
      
      
      scrollTrigger:{
          trigger:".move",
          scroller:"body",

          start:"top 50%",
          end:"top -100%",
          scrub:2,
          pin:true
      }
   })


   var project = gsap.timeline({
    scrollTrigger:{
      trigger:".inner-project1",
      scroller:"body",
      start:"top 50%",
      end:"top 50%",
      scrub:2

    }
   });

   project.from(".first-project, .first-project .box2 span",{
          x:"-100%",
          opacity:0,
          ease:"none",
          
   })
  

   var project = gsap.timeline({
    scrollTrigger:{
      trigger:".inner-project2",
      scroller:"body",
      start:"top 50%",
      end:"top 50%",
      scrub:2,


    }
   });

   project.from(".second-project, .second-project .box2 span",{
          x:"100%",
          opacity:0,
          
   })



   var project = gsap.timeline({
    scrollTrigger:{
      trigger:".inner-project3",
      scroller:"body",
      start:"top 50%",
      end:"top 50%",
      scrub:2

    }
   });

   project.from(".third-project, .third-project .box2 span",{
          
          opacity:0,
          x:"-100%"
   })
  

   var project = gsap.timeline({
    scrollTrigger:{
      trigger:".inner-project4",
      scroller:"body",
      start:"top 50%",
      end:"top 50%",
      scrub:2

    }
   });

   project.from(".fourth-project, .fourth-project .box2 span",{
          
          opacity:0,
          x:"100%"
   })
  
 
  //  about header


  
  var about = document.querySelectorAll(".about-header");
  
  about.forEach(text =>{
  console.log(text);
      var observer=new IntersectionObserver(element =>{
              element.forEach(es =>{
  
                if(es.isIntersecting){
                      text.classList.add("new-about");
                }      
                else{
                          text.classList.remove("new-about");
                }          
              })  
  
      })        
  
      observer.observe(text);
  });  
  var timeline = document.querySelectorAll(".timeline");
  
  timeline.forEach(texts =>{
  console.log(texts);
      var observer=new IntersectionObserver(element =>{
              element.forEach(es =>{
  
                if(es.isIntersecting){
                      texts.classList.add("new-timeline");
                }      
                else{
                          texts.classList.remove("new-timeline");
                }          
              })  
  
      })        
  
      observer.observe(texts);
  });  


  
// matter js

var canvas = $("#wrapper-canvas").get(0);

var dimensions = {
  width: $(window).width(),
  height: $(window).height()
};


Matter.use('matter-attractors');
Matter.use('matter-wrap');

function runMatter() {
  // module aliases
  var Engine = Matter.Engine,
    Events = Matter.Events,
    Runner = Matter.Runner,
    Render = Matter.Render,
    World = Matter.World,
    Body = Matter.Body,
    Mouse = Matter.Mouse,
    Common = Matter.Common,
    Composite = Matter.Composite,
    Composites = Matter.Composites,
    Bodies = Matter.Bodies;

  // create engine
  var engine = Engine.create();

  engine.world.gravity.y = 0;
  engine.world.gravity.x = 0;
  engine.world.gravity.scale = 0.1;

  // create renderer
  var render = Render.create({
    element: canvas,
    engine: engine,
    options: {
      showVelocity: false,
      width: dimensions.width,
      height: dimensions.height,
      wireframes: false,
      background: 'transparent'
    }
  });



  // create runner
  var runner = Runner.create();

  // Runner.run(runner, engine);
  // Render.run(render);

  // create demo scene
  var world = engine.world;
  world.gravity.scale = 0;

  // create a body with an attractor
  var attractiveBody = Bodies.circle(
    render.options.width / 2,
    render.options.height / 2,
    Math.max(dimensions.width / 25, dimensions.height / 25) / 2,
    {
      render: {
        fillStyle: `#000`,
        strokeStyle: `#000`,
        lineWidth: 0
      },

      isStatic: true,
      plugin: {
        attractors: [
          function (bodyA, bodyB) {
            return {
              x: (bodyA.position.x - bodyB.position.x) * 1e-6,
              y: (bodyA.position.y - bodyB.position.y) * 1e-6
            };

          }]
      }
    });




  World.add(world, attractiveBody);

  // add some bodies that to be attracted
  for (var i = 0; i < 60; i += 1) {
    let x = Common.random(0, render.options.width);
    let y = Common.random(0, render.options.height);
    let s = Common.random() > 0.6 ? Common.random(10, 200) : Common.random(4, 60);
    let poligonNumber = Common.random(3, 6);
    var body = Bodies.polygon(
      x, y,
      poligonNumber,
      s,

      {
        mass: s / 20,
        friction: 0,
        frictionAir: 0.02,
        angle: Math.round(Math.random() * 360),
        render: {
          fillStyle: '#222222',
          strokeStyle: `#000000`,
          lineWidth: 2
        }
      });




    World.add(world, body);


    let r = Common.random(0, 1);
    var circle = Bodies.circle(x, y, Common.random(2, 8), {
      mass: 0.1,
      friction: 0,
      frictionAir: 0.01,
      render: {
        fillStyle: r > 0.3 ? `#27292d` : `#444444`,
        strokeStyle: `#000000`,
        lineWidth: 2
      }
    });


    World.add(world, circle);

    var circle = Bodies.circle(x, y, Common.random(2, 20), {
      mass: 6,
      friction: 0,
      frictionAir: 0,
      render: {
        fillStyle: r > 0.3 ? `#334443` : `#222222`,
        strokeStyle: `#111111`,
        lineWidth: 4
      }
    });


    World.add(world, circle);

    var circle = Bodies.circle(x, y, Common.random(2, 30), {
      mass: 0.2,
      friction: 0.6,
      frictionAir: 0.8,
      render: {
        fillStyle: `#191919`,
        strokeStyle: `#111111`,
        lineWidth: 3
      }
    });

    World.add(world, circle);
  }

  // add mouse control
  var mouse = Mouse.create(render.canvas);

  Events.on(engine, 'afterUpdate', function () {
    if (!mouse.position.x) return;
    // smoothly move the attractor body towards the mouse
    Body.translate(attractiveBody, {
      x: (mouse.position.x - attractiveBody.position.x) * 0.12,
      y: (mouse.position.y - attractiveBody.position.y) * 0.12
    });

  });


  // return a context for MatterDemo to control
  let data = {
    engine: engine,
    runner: runner,
    render: render,
    canvas: render.canvas,
    stop: function () {
      Matter.Render.stop(render);
      Matter.Runner.stop(runner);
    },
    play: function () {
      Matter.Runner.run(runner, engine);
      Matter.Render.run(render);
    }
  };

  Matter.Runner.run(runner, engine);
  Matter.Render.run(render);
  return data;
}

function debounce(func, wait, immediate) {
  var timeout;
  return function () {
    var context = this, args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

function setWindowSize() {
  let dimensions = {};
  dimensions.width = $(window).width();
  dimensions.height = $(window).height();

  m.render.canvas.width = $(window).width();
  m.render.canvas.height = $(window).height();
  return dimensions;
}

let m = runMatter();
setWindowSize();
$(window).resize(debounce(setWindowSize, 250));











