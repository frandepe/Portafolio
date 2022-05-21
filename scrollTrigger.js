// const scrollResponsive = matchMedia("(max-width: 600px)");
// const cambiarMQ = (mediaQ) => {
//   if (mediaQ.matches === false) {

/* *** HOME *** */

gsap.from(".home-izquierda", {
  scrollTrigger: {
    trigger: ".home-izquierda",
    anticipatePin: 1,
    opacity: 1,
  },
  duration: 1.5,
  ease: "expo.out",
  x: -200,
  opacity: 0,
});

gsap.from(".box", {
  scrollTrigger: ".box",
  duration: 2,
  ease: "expo.out",
  y: 300,
  scrollTrigger: ".box",
});

gsap.from(".titulo-skills", {
  scrollTrigger: {
    trigger: ".titulo-skills",
    anticipatePin: 1,
    opacity: 1,
  },
  duration: 1.5,
  ease: "expo.out",
  y: -300,
  opacity: 0,
});

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

gsap.from(".tr1", {
  scrollTrigger: {
    trigger: ".tr1",
    start: "20px 80%",
    opacity: 1,
  },
  duration: 1,
  opacity: 0,
  x: 200,
});

gsap.from(".tr2", {
  scrollTrigger: {
    trigger: ".tr2",
    start: "20px 80%",
    opacity: 1,
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
    opacity: 1,
  },
  duration: 1,
  opacity: 0,
  x: 200,
});

gsap.from(".tr4", {
  scrollTrigger: {
    trigger: ".tr4",
    start: "20px 80%",
    opacity: 1,
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
    opacity: 1,
  },
  duration: 1,
  opacity: 0,
  x: 200,
});

gsap.from(".tr6", {
  scrollTrigger: {
    trigger: ".tr6",
    start: "20px 80%",
    opacity: 1,
  },
  duration: 1,
  opacity: 0,
  x: -200,
  delay: 0.5,
});

gsap.from(".tr7", {
  scrollTrigger: {
    trigger: ".tr7",
    start: "20px 80%",
    opacity: 1,
  },
  duration: 1,
  opacity: 0,
  x: 200,
});

gsap.from(".tr8", {
  scrollTrigger: {
    trigger: ".tr8",
    start: "20px 80%",
    opacity: 1,
  },
  duration: 1,
  opacity: 0,
  x: -200,
});

gsap.from(".tr9", {
  scrollTrigger: {
    trigger: ".tr9",
    start: "20px 80%",
    opacity: 1,
  },
  duration: 1,
  opacity: 0,
  x: 200,
});

/* *** CONTACT *** */

gsap.from(".profile-card__img", {
  scrollTrigger: {
    trigger: ".profile-card__img",
    anticipatePin: 1,
    opacity: 1,
  },
  duration: 1.5,
  ease: "expo.out",
  y: -200,
  opacity: 0,
});

let contactForm = gsap.timeline({
  scrollTrigger: {
    trigger: ".profile-card-social",
    start: "center bottom",
  },
});

contactForm
  .from(".facebook", {
    scrollTrigger: {
      trigger: ".facebook",
      anticipatePin: 1,
      opacity: 1,
    },
    duration: 0.3,
    opacity: 0,
    delay: 0.6,
  })
  .from(".instagram", {
    scrollTrigger: {
      trigger: ".instagram",
      anticipatePin: 1,
      opacity: 1,
    },
    duration: 0.3,
    opacity: 0,
    delay: 0.5,
  })
  .from(".linkedin", {
    scrollTrigger: {
      trigger: ".linkedin",
      anticipatePin: 1,
      opacity: 1,
    },
    duration: 0.3,
    opacity: 0,
    delay: 0.4,
  })
  .from(".github", {
    scrollTrigger: {
      trigger: ".github",
      anticipatePin: 1,
      opacity: 1,
    },
    duration: 0.3,
    opacity: 0,
    delay: 0.3,
  })
  .from(".twitter", {
    scrollTrigger: {
      trigger: ".twitter",
      anticipatePin: 1,
      opacity: 1,
    },
    duration: 0.3,
    opacity: 0,
    delay: 0.2,
  });

// }
// };

// scrollResponsive.addListener(cambiarMQ);
// cambiarMQ(scrollResponsive);
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
