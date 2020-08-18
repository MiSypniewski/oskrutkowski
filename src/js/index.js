import "../scss/main.scss";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

console.log("HELLO 🚀");

const width = window.innerWidth;
const animationSections = document.querySelectorAll(".animation--js");
const paymentHTML = document.querySelector(".payment");

if (width >= 768) {
  animationSections.forEach((section) => {
    gsap.fromTo(
      section.children,
      { y: "+=100", opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.3,
        duration: 0.8,
        ease: "easeInOut",
        scrollTrigger: { trigger: section, start: "top 40%" },
      }
    );
  });

  gsap.fromTo(
    paymentHTML.children,
    { y: "+=100", opacity: 0 },
    {
      y: 0,
      opacity: 1,
      stagger: 0.3,
      duration: 0.8,
      ease: "easeInOut",
      scrollTrigger: { trigger: ".payment", start: "top 80%" },
    }
  );
}
