console.log(gsap.config());

// gsap.to(".foto", {
//   duration: 3,
//   x: 600,
//   delay: 1,
// });

gsap.from(".presentacion", {
  scrollTrigger: ".presentacion",
  duration: 2.5,
  ease: "expo.out",
  x: 500,
  scrollTrigger: ".presentacion",
});

gsap.from(".foto", {
  scrollTrigger: ".foto",
  duration: 2.5,
  ease: "expo.out",
  x: -500,
  scrollTrigger: ".foto",
});

let tl = gsap.timeline();
tl.from(".hola-nombre", {
  duration: 2,
  y: -200,
  scrollTrigger: ".hola-nombre",
});

tl.from(".nombre", {
  duration: 0.3,
  y: -200,
  scale: 0,
  stagger: 0.5,
  scrollTrigger: ".nombre",
});

tl.from(".presentacion-descripcion", {
  duration: 0.3,
  x: -200,
  scale: 0,
  scrollTrigger: ".presentacion-descripcion",
});

tl.from(".sobre-mi", {
  duration: 0.3,
  y: 200,
  scale: 0,
});

tl.from(".educacion", {
  duration: 0.3,
  y: 200,
  scale: 0,
});

gsap.from(".titulo-skills", {
  scrollTrigger: {
    trigger: ".titulo-skills",
    anticipatePin: 1,
    opacity: 1,
  },
  duration: 1.5,
  ease: "bounce.out",
  y: -300,
});

// let targets = [".iconhtml1", ".iconjavascript"];

gsap.from(".icon-scroll-left", {
  scale: 0.1,
  rotate: 200,
  stagger: {
    each: 0.5,
  },
  scrollTrigger: {
    trigger: ".icon-scroll-left",
    // toggleActions: "restart pause reverse pause",
    start: "20px 80%",
    // start: "top center",
    // end: "top 100px",
  },
  duration: 1,
  x: -400,
});

gsap.from(".icon-scroll-rigth", {
  scale: 0.1,
  rotate: 200,
  stagger: {
    each: 0.5,
  },
  scrollTrigger: {
    trigger: ".icon-scroll-rigth",
    // toggleActions: "restart pause reverse pause",
    start: "20px 80%",
    // start: "top center",
    // end: "top 100px",
  },
  duration: 1,
  x: -400,
});

// let containers = gsap.utils.toArray(".lista-izquierda");

// containers.forEach(function (container) {
//   gsap.fromTo(
//     container.querySelectorAll(".iconhtml"),
//     { x: -250 },
//     {
//       x: 0,
//       stagger: 0.5,
//       scrollTrigger: {
//         trigger: container,
//         scrub: true,
//         start: "10px bottom",
//         // end: "top 10px",
//         immediateRender: false,
//         // markers: true,
//       },
//       duration: 2.5,
//       ease: "power3.out",
//       // duration: 1,
//     }
//   );
// });
// gsap.registerPlugin(ScrollTrigger);
// ScrollTrigger.create({
//   trigger: ".section-skills",
//   start: "top top",
//   end: "+=300px",
//   pinSpacing: true,
//   pin: true,
// });

// toggleActions: "restart pause resume pause",

// gsap.from(".p-animation", {
//   duration: 0.05,
//   y: -200,
//   scale: 0,
//   stagger: 0.5,
//   delay: 2,
// });

// gsap.from(".icono2", {
//   scrollTrigger: {
//     trigger: ".icono2",
//     start: "bottom center",
//   },
//   duration: 2.5,
//   ease: "expo.out",
//   x: 500,
// });
