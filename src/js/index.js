import "../scss/main.scss";
import { courses, products } from "./db";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

console.log("HELLO 🚀");

const width = window.innerWidth;
const animationSections = document.querySelectorAll(".animation--js");
const paymentHTML = document.querySelector(".payment");

const productsBoxHtml = document.querySelector(".products__box--js");
const coursesBoxHtml = document.querySelector(".about__box--js");

const courseScheme = (date, time) => {
  return `<p class="about__cours--item">${date} godz ${time}</p>`;
};

const articleScheme = (title, price, descryption) => {
  let desc = "";
  descryption.forEach((item) => {
    desc += `<li class="product__descryption--item">${item}</li>`;
  });
  return `<article class="product">
              <div>
                <h3 class="product__title">${title}</h3>
                <p class="product__price">${price}</p>
                <ul class="product__descryption">
                  ${desc}
                </ul>
              </div>
              <a class="product__button" href="tel:608270474">Zapisz się!</a>
            </article>`;
};

courses.forEach((cours) => (coursesBoxHtml.innerHTML += courseScheme(cours.date, cours.time)));

products.forEach(
  (article) => (productsBoxHtml.innerHTML += articleScheme(article.title, article.price, article.descryption))
);

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
