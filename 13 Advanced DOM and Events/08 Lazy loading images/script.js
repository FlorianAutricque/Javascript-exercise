"use strict";

// LAZY LOADING IMAGES

//have a lower qlty img, then blur it in the css
// have a data-src of higher qlty img

const imgTargets = document.querySelectorAll("img[data-src]");

const loadImg = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  // replace src with data-src
  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener("load", function () {
    entry.target.classList.remove("lazy-img");
  });

  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  //for the client to not see the loading, should happen in the BG
  rootMargin: "200px",
});

imgTargets.forEach(img => imgObserver.observe(img));
