const countriesContainer = document.querySelector('.countries');

function renderCountry(data) {
  console.log(data[0]);
  let html = `[0]
        <article class="country">
          <img class="country__img" src="${data[0].flags.png}" />
          <div class="country__data">
            <h3 class="country__name">${data[0].name.common}</h3>
            <h4 class="country__region">${data[0].region}</h4>
            <p class="country__row"><span>${data[0].population}</span>POP people</p>
            <p class="country__row"><span>${data[0].region}🗣️</span></p>
    
        </article>
    
      </div>`;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
}

const whereAmI = async function (lat, long) {
  try {
    let response = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${long}`
    );
    if (!response.ok) throw console.error('something wrong ');
    let responseJson = await response.json();
    console.log(responseJson.address.country.toLowerCase());
    let country = await fetch(
      `https://restcountries.com/v3.1/name/${responseJson.address.country.toLowerCase()}`
    );
    if (!country.ok) throw new error('something wrong ');
    let countryJson = await country.json();
    let neighbour = countryJson[0].borders[0];
    let neighbourCountry = await fetch(
      `https://restcountries.com/v3.1/alpha/${neighbour}`
    );
    console.log(neighbourCountry);
    let neighbourCountryJson = await neighbourCountry.json();
    renderCountry(countryJson);

    renderCountry(neighbourCountryJson);
  } catch (error) {
    console.log(error);
  }
};

whereAmI(52.508, 13.381);

let getJSON = function (url, errorMessage) {
  return fetch(url).then(response => {
    if (!response.ok)
      throw `${errorMessage} with status code ${response.status}`;
    return response.json();
  });
};

const getThreeCountries = async function (c1, c2, c3) {
  let [data1] = await getJSON(
    `https://restcountries.com/v3.1/name/${c1}`,
    'country not found '
  );
  let [data2] = await getJSON(
    `https://restcountries.com/v3.1/name/${c2}`,
    'country not found '
  );
  let [data3] = await getJSON(
    `https://restcountries.com/v3.1/name/${c3}`,
    'country not found '
  );

  //all promise combinator
  let respAll = await Promise.all([
    getJSON(`https://restcountries.com/v3.1/name/${c1}`, 'country not found '),
    getJSON(`https://restcountries.com/v3.1/name/${c2}`, 'country not found '),
    getJSON(`https://restcountries.com/v3.1/name/${c3}`, 'country not found '),
  ]);
  console.log(respAll);
  //   `https://restcountries.com/v3.1/name/${c1}`)
  console.log('datas', data1, data2, data3);
};
getThreeCountries('germany', 'iran', 'usa');

// (async function () {
//   const resp = await Promise.race([
//     getJSON(
//       `https://restcountries.com/v3.1/name/germany`,
//       'country not found '
//     ),
// getJSON(`https://restcountries.com/v3.1/name/iran`, 'country not found '),
//     getJSON(`https://restcountries.com/v3.1/name/usa`, 'country not found '),
//   ]);
//   console.log('race', resp);
// })();

const timeout = function (sec) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject('waited for too long');
    }, sec * 1000);
  });
};
Promise.race([
  getJSON(`https://restcountries.com/v3.1/name/iran`, 'country not found '),
  timeout(5),
])
  .then(res => console.log('res', res))
  .catch(err => console.log(err));

Promise.allSettled([
  Promise.resolve('success'),
  Promise.reject('error'),
  Promise.resolve('Another success'),
])
  .then(res => console.log(res))
  .catch(err => console.log(err));
Promise.any([
  Promise.resolve('success'),
  Promise.reject('error'),
  Promise.resolve('Another success'),
])
  .then(res => console.log(res))
  .catch(err => console.log(err));
