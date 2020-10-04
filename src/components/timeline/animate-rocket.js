import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { onMount } from "svelte";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

export const animateRocket = () => {
  gsap.defaults({ ease: "none" });
  gsap.set(".text", { autoAlpha: 0.4 });
  gsap.set(".pointer", {
    autoAlpha: 1,
    xPercent: -50,
    yPercent: -50,
    transformOrigin: "50% 50%",
  });

  const tl = gsap
    .timeline({
      defaults: {
        duration: 0.05,
        autoAlpha: 1,
        transformOrigin: "center",
        ease: "elastic(2.5, 1)",
      },
    })
    .to(".circle--1", { scale: 1.5 }, 0.2)
    .to(".text--1", { autoAlpha: 1 }, 0.2)
    .to(".circle--2", { scale: 1.5 }, 0.35)
    .to(".text--2", { autoAlpha: 1 }, 0.35)
    .to(".circle--3", { scale: 1.5 }, 0.48)
    .to(".text--3", { autoAlpha: 1 }, 0.48)
    .to(".circle--4", { scale: 1.5 }, 0.65)
    .to(".text--4", { autoAlpha: 1 }, 0.65);

  const action = gsap
    .timeline({
      defaults: { duration: 1 },
      scrollTrigger: {
        trigger: "#svg",
        scrub: true,
        start: "top center",
        end: "bottom center",
      },
    })
    .to(".pointer", {
      duration: 0.01,
      autoAlpha: 1,
    })
    .to(
      ".pointer",
      {
        motionPath: {
          path: ".timeline",
          align: "#path",
          autoRotate: -140,
        },
      },
      0
    )
    .add(tl, 0);
};
