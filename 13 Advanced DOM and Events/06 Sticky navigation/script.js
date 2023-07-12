"use strict";

// STICKY NAVIGATION
const coords = section1.getBoundingClientRect();
window.addEventListener("scroll", function () {
  if (this.window.scrollY > coords.top) nav.classList.add("sticky");
});

// const obsCallback = function (entries, observer) {
//   entries.forEach(entry => {
//     console.log(entry);
//   });
// };

// const obsOptions = {
//   root: null,
//   threshold: [0, 0.2],
// };

// const observer = new IntersectionObserver(obsCallback, obsOptions);
// observer.observe(section1);

const stickyNav = function (entries) {
  const [entry] = entries;
  console.log(entry);
  if (!entry.isIntersecting) nav.classList.add("sticky");
  else nav.classList.remove("sticky");
};

const headersObs = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
});
headersObs.observe(header);
