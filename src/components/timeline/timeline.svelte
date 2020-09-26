<style lang="scss">
  @import "timeline";
</style>

<script>
  import {gsap} from 'gsap'
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  import { MotionPathPlugin } from "gsap/MotionPathPlugin";
  import {onMount} from 'svelte'

  gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);
  gsap.defaults({ease: "none"});

  onMount(() => {
    gsap.defaults({ease: "none"});
    gsap.set(".text", {autoAlpha: 0.4})
    gsap.set(".circle--indicator", {yPercent: -50})

    const tl = gsap.timeline({
      defaults: {
        duration: 0.05,
        autoAlpha: 1,
        transformOrigin: 'center',
        ease: "elastic(2.5, 1)"
      }})
            .to(".circle--1", {scale: 1.5,}, 0.2)
            .to(".text--1", {autoAlpha: 1}, 0.2)
            .to(".circle--2", {scale: 1.5,}, 0.4)
            .to(".text--2", {autoAlpha: 1}, 0.4)
            .to(".circle--3", {scale: 1.5,}, 0.6)
            .to(".text--3", {autoAlpha: 1}, 0.6)
            .to(".circle--4", {scale: 1.5,}, .8)
            .to(".text--4", {autoAlpha: 1}, .8)

    const action = gsap.timeline({defaults: {duration: 1},
      scrollTrigger: {
        trigger: "#svg",
        scrub: true,
        start: "top center",
        end: "bottom center",
      }})
            .to(".circle--indicator", {duration: 0.01, autoAlpha: 1})
            .to(".circle--indicator", {motionPath: {path: ".timeline", align: "#path"}}, 0)
            .add(tl, 0);
  })
</script>

<section id="timeline">

  <svg id="svg" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 600 500">

    <path class="timeline" d="M 300 0 L 300 500" />

    <circle class="circle circle--indicator" r="20px" cx="300" cy="20"></circle>

    <circle class="circle circle--1" r="20px" cx="300" cy="100"></circle>
    <text class="text text--1 text--position" x="0" y="100">Front-end web developer</text>
    <text class="text text--1 text--company" x="0" y="100">Socialbakers</text>
    <text class="text text--1 text--date" x="0" y="100">01/2019 - present</text>
    <text class="text--1 text--year" x="50%" y="90">2019</text>

    <circle class=" circle circle--2" r="20px" cx="300" cy="200"></circle>
    <text class="text text--2 text--position" x="0" y="200">Web coder</text>
    <text class="text text--2 text--company" x="0" y="200">Socialbakers</text>
    <text class="text text--2 text--date" x="0" y="200">01/2017 - 12/2018</text>
    <text class="text--2 text--year" x="50%" y="190">2017</text>

    <circle class="circle circle--3" r="20px" cx="300" cy="300"></circle>
    <text class="text text--3 text--position" x="0" y="300">Web coder</text>
    <text class="text text--3 text--company" x="0" y="300">LMC</text>
    <text class="text text--3 text--date" x="0" y="300">07/2015 - 12/2016</text>
    <text class="text--3 text--year" x="50%" y="290">2016</text>

    <circle class="circle circle--4" r="20px" cx="300" cy="400"></circle>
    <text class="text text--4 text--position" x="0" y="400">Web coder</text>
    <text class="text text--4 text--company" x="0" y="400">AVG</text>
    <text class="text text--4 text--date" x="0" y="400">08/2011 - 06/2015</text>
    <text class="text--4 text--year" x="50%" y="390">2011</text>

  </svg>

</section>
