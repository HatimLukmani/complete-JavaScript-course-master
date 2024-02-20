'use strict';
let data;
const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
// function getCountryStuff(country) {
//   let request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//   //   request.open('GET', `https://restcountries.com/v3.1/all?fields=${country}`);
//   request.send();
//   function renderCountry(data) {
//     let html = `
//     <article class="country">
//       <img class="country__img" src="${data.flags.png}" />
//       <div class="country__data">
//         <h3 class="country__name">${data.name.common}</h3>
//         <h4 class="country__region">${data.region}</h4>
//         <p class="country__row"><span>${data.population}</span>POP people</p>
//         <p class="country__row"><span>${data.region}🗣️</span></p>

//     </article>

//   </div>`;
//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = 1;
//   }
//   request.addEventListener('load', function (e) {
//     e.preventDefault();
//     [data] = JSON.parse(this.responseText);
//     console.log('data', data);
//     renderCountry(data);
//     const request2 = new XMLHttpRequest();
//     let neiCode = data.borders[0];
//     request2.open('GET', `https://restcountries.com/v3.1/alpha/${neiCode}`);
//     request2.send();
//     request2.addEventListener('load', function () {
//       [data] = JSON.parse(this.responseText);
//       console.log('data', data);
//       renderCountry(data);
//     });
//   });
// }
// getCountryStuff('usa');
function renderCountry(data) {
  let html = `
    <article class="country">
      <img class="country__img" src="${data.flags.png}" />
      <div class="country__data">
        <h3 class="country__name">${data.name.common}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>${data.population}</span>POP people</p>
        <p class="country__row"><span>${data.region}🗣️</span></p>

    </article>

  </div>`;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
}

//using helper function
let getJSON = function (url, errorMessage) {
  return fetch(url).then(response => {
    if (!response.ok)
      throw `${errorMessage} with status code ${response.status}`;
    return response.json();
  });
};

const getCountryData = function (country) {
  getJSON(`https://restcountries.com/v3.1/name/${country}`, 'country not found')
    .then(function (data) {
      // console.log(data[0]);
      console.log(data);
      renderCountry(data[0]);
      console.log(data[0]);
      let neighbour = data[0].border[0];

      return getJSON(
        `https://restcountries.com/v3.1/alpha/${neighbour}`,
        'country not found'
      );
    })

    .then(function (data2) {
      // console.log(data2[0]);
      renderCountry(data2[0]);
    })
    .catch(err => {
      let html = `<p>${err}</p>`;
      countriesContainer.insertAdjacentHTML('beforeend', html);
      countriesContainer.style.opacity = 1;
    });
};

// btn.addEventListener('click', function (e) {
//   e.preventDefault();
//   getCountryData('usa');
// });
//creating promises
let lottery = new Promise(function (resolve, reject) {
  console.log('lottery withdrawing in process');
  setTimeout(function () {
    if (Math.random() >= 0.5) resolve('fulfilled');
    else reject('rejected');
  }, 2000);
});
lottery.then(val => console.log(val)).catch(err => console.err(err));

//promissing old callback functions
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};
wait(2)
  .then(function () {
    console.log('i have waited 2 seconds');
    return wait(5);
  })
  .then(function () {
    console.log('i have waited 5 seconds');
  });
