import { onMount } from "svelte";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const animateItems = () => {
  let boxes = gsap.utils.toArray(".item");

  boxes.forEach((box) => {
    const animBoxes = gsap.fromTo(
      box,
      { autoAlpha: 0.1 },
      { duration: 0.2, autoAlpha: 1 }
    );

    ScrollTrigger.create({
      trigger: box,
      animation: animBoxes,
      scrub: 1,
      start: "top 70%",
      end: "bottom 60%",
    });

    const animHr = gsap.fromTo(
      box.nextElementSibling,
      { width: 0 },
      { width: "100%" }
    );

    ScrollTrigger.create({
      trigger: box,
      animation: animHr,
      scrub: true,
      start: "top 40%",
      end: "bottom 40%",
    });
  });
};
