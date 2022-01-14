console.log(gsap.config());

// gsap.to(".foto", {
//   duration: 3,
//   x: 600,
//   delay: 1,
// });

const scrollResponsive = matchMedia("(max-width: 600px)");
const cambiarMQ = (mediaQ) => {
  if (mediaQ.matches === false) {
    gsap.from(".presentacion", {
      scrollTrigger: ".presentacion",
      duration: 2.5,
      ease: "expo.out",
      x: 300,
      scrollTrigger: ".presentacion",
    });

    gsap.from(".foto", {
      scrollTrigger: ".foto",
      duration: 2.5,
      ease: "expo.out",
      x: -300,
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
      opacity: 0,
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
      x: -200,
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
      x: 200,
    });

    gsap.from(".icono-star", {
      duration: 1,
      opacity: 0,
      scale: 3,
      stagger: {
        each: 0.5,
      },
      scrollTrigger: {
        trigger: ".icono-star",
      },
    });

    let contactForm = gsap.timeline({
      scrollTrigger: {
        trigger: ".contacto",
        start: "center bottom",
      },
    });

    contactForm
      .from(".contacto-h2", {
        x: -200,
        opacity: 0,
        duration: 1,
      })
      .from(".info-contacto", {
        y: 300,
        opacity: 0,
        duration: 1,
      })
      .from(
        ".btnSubmit",
        {
          x: -200,
          opacity: 0,
          duration: 1,
        },
        "-=1"
      );

    gsap.from(".eye", {
      duration: 1,
      opacity: 0,
      scale: 3,
      stagger: {
        each: 0.5,
      },
      scrollTrigger: {
        trigger: ".eye",
      },
    });

    gsap.from(".tr1", {
      scrollTrigger: {
        trigger: ".tr1",
        start: "20px 80%",
      },
      duration: 1,
      opacity: 0,
      x: 200,
    });

    gsap.from(".tr2", {
      scrollTrigger: {
        trigger: ".tr2",
        start: "20px 80%",
      },
      duration: 1,
      opacity: 0,
      x: -200,
      delay: 0.5,
    });

    gsap.from(".tr3", {
      scrollTrigger: {
        trigger: ".tr3",
        start: "20px 80%",
      },
      duration: 1,
      opacity: 0,
      x: 200,
    });

    gsap.from(".tr4", {
      scrollTrigger: {
        trigger: ".tr4",
        start: "20px 80%",
      },
      duration: 1,
      opacity: 0,
      x: -200,
      delay: 0.5,
    });

    gsap.from(".tr5", {
      scrollTrigger: {
        trigger: ".tr5",
        start: "20px 80%",
      },
      duration: 1,
      opacity: 0,
      x: 200,
    });

    gsap.from(".tr6", {
      scrollTrigger: {
        trigger: ".tr6",
        start: "20px 80%",
      },
      duration: 1,
      opacity: 0,
      x: -200,
      delay: 0.5,
    });
  }
};

scrollResponsive.addListener(cambiarMQ);
cambiarMQ(scrollResponsive);
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
