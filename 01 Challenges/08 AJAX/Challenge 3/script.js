"use strict";
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

const imgContainer = document.querySelector(".images");

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement("img");
    img.src = imgPath;

    img.addEventListener("load", function () {
      imgContainer.append(img);
      resolve(img);
    });

    img.addEventListener("load", function () {
      reject(new Error("Image not found"));
    });
  });
};

const loadPause = async function () {
  try {
    //load image 1
    let img = await createImage("img/img-1.jpg");
    console.log("Image 1 loaded");

    await wait(2);
    img.style.display = "none";

    //load image2
    img = await createImage("img/img-2.jpg");
    console.log("Image 2 loaded");

    await wait(2);
    img.style.display = "none";
  } catch (err) {
    console.log(err);
  }
};
loadPause();

const loadAll = async function (imgArr) {
  try {
    const imgs = imgArr.map(async img => await createImage(img));
    console.log(imgs);

    const imgsEl = await Promise.all(imgs);
    console.log(imgsEl);
  } catch (err) {
    console.log(err);
  }
};
loadAll(["img/img-1.jpg", "img/img-2.jpg", "img/img-3.jpg"]);
