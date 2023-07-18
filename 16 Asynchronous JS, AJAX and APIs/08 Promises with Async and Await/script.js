"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

///////////////////////////////////////

const renderCountry = function (data, className = "") {
  const html = `
  <article class="country ${className} ">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)} M people</p>
      <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
      <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
  </article>`;

  countriesContainer.insertAdjacentHTML("beforeend", html);
  countriesContainer.style.opacity = 1;
};

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAmI = async function (country) {
  //geolocation
  const pos = await getPosition();
  const { latitude: lat, longitude: lng } = pos.coords;

  //reverse geocoding
  const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
  const dataGeo = await resGeo.json();

  //country data
  const res = await fetch(
    `https://restcountries.com/v2/name/${dataGeo.country}`
  );
  console.log(res);
  const data = await res.json();
  console.log(data);
  renderCountry(data[0]);
};
whereAmI();
