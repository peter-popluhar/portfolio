import { onMount, onDestroy } from "svelte";

let observerConfig = {
  root: null,
  rootMargin: "0px 0px 200px 0px",
};

function observerFn(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.backgroundImage = entry.target.dataset.src;
      observer.unobserve(entry.target);
    }
  });
}

export const intersectionObserver = (el) => {
  if (!!window.IntersectionObserver) {
    let observer = new IntersectionObserver(observerFn, observerConfig);
    document.querySelectorAll(el).forEach((item) => {
      observer.observe(item);
    });
  }
};
