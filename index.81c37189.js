!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},o=e.parcelRequire4ed9;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var i={id:e,exports:{}};return n[e]=i,o.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){t[e]=n},e.parcelRequire4ed9=o);var i;new(0,o("01dLj").default)(".cube-slider",{effect:"cube",grabCursor:!0,loop:!0,direction:"vertical",speed:2800,cubeEffect:{shadow:!0,slideShadows:!1,shadowOffset:40,shadowScale:1},autoplay:{delay:5e3,pauseOnMouseEnter:!0},pagination:{el:".swiper-pagination",type:"bullets",clickable:!0,dynamicMainBullets:4,currentClass:".active",totalClass:".swiper-pagination-total"},on:{init:function(){},slideChange:function(){var e=document.querySelector(".swiper-pagination-total"),n=(this.realIndex+1).toString().padStart(2,"0");e&&(e.textContent=n)}}});document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelectorAll(".number");e.forEach((function(e){e.originalValue=parseInt(e.textContent.replace(/\s+/g,""),10),e.textContent="0"}));var n=new IntersectionObserver((function(e,n){e.forEach((function(e){if(e.isIntersecting){var t=e.target,o=t.originalValue;setTimeout((function(){return function(e,n){var t=n/93.75,o=0;function i(){(o+=t)<n?(e.textContent=Math.ceil(o).toLocaleString(),requestAnimationFrame(i)):e.textContent=n.toLocaleString()}i()}(t,o)}),500),n.unobserve(t)}}))}),{threshold:.1});e.forEach((function(e){n.observe(e)}))})),(i={openBlockInfoCeoBtn:document.querySelector("[data-open-block-info-ceo]"),blockInfoCEO:document.querySelector("[data-block-info-ceo]"),iconPlus:document.querySelector(".icon-plus"),iconMinus:document.querySelector(".icon-minus")}).openBlockInfoCeoBtn.addEventListener("click",(function(){i.blockInfoCEO.classList.toggle("is-hidden"),i.iconPlus.classList.toggle("is-hidden"),i.iconMinus.classList.toggle("is-hidden")})),o("g9nVm"),o("jyXl6"),o("7q5A6"),o("cfhKH"),o("bjFrd"),o("4wF8Y"),o("dGAYI"),o("hkAqH"),o("3DIcG"),o("8VrgS"),o("dsUJC"),o("3AuBn"),o("6vy6P"),o("aW0C5")}();
//# sourceMappingURL=index.81c37189.js.map
