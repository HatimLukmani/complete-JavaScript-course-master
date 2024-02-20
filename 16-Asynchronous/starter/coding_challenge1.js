/* 
In this challenge you will build a function 'whereAmI' which renders a country ONLY based on GPS coordinates. For that, you will use a second API to geocode coordinates.

Here are your tasks:

PART 1
1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng) (these are GPS coordinates, examples are below).
2. Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding: https://geocode.xyz/api.
The AJAX call will be done to a URL with this format: https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and promises to get the data. Do NOT use the getJSON function we created, that is cheating 😉
3. Once you have the data, take a look at it in the console to see all the attributes that you recieved about the provided location. Then, using this data, log a messsage like this to the console: 'You are in Berlin, Germany'
4. Chain a .catch method to the end of the promise chain and log errors to the console
5. This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403. This is an error with the request. Remember, fetch() does NOT reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message.

PART 2
6. Now it's time to use the received data to render a country. So take the relevant attribute from the geocoding API result, and plug it into the countries API that we have been using.
7. Render the country and catch any errors, just like we have done in the last lecture (you can even copy this code, no need to type the same code)

TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
TEST COORDINATES 2: 19.037, 72.873
TEST COORDINATES 2: -33.933, 18.474

GOOD LUCK 😀
*/
const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

let getJSON = function (url, errorMessage) {
  return fetch(url).then(response => {
    if (!response.ok)
      throw `${errorMessage} with status code ${response.status}`;
    return response.json();
  });
};

// const getCountryData = function (country) {
//   getJSON(`https://restcountries.com/v3.1/name/${country}`, 'country not found')
//     .then(function (data) {
//       // console.log(data[0]);
//       console.log(data);
//       renderCountry(data[0]);
//       let neighbour = data[0].border[0];

//       return getJSON(
//         `https://restcountries.com/v3.1/alpha/${neighbour}`,
//         'country not found'
//       );
//     })

//     .then(function (data2) {
//       // console.log(data2[0]);
//       renderCountry(data2[0]);
//     })
//     .catch(err => {
//       let html = `<p>${err}</p>`;
//       countriesContainer.insertAdjacentHTML('beforeend', html);
//       countriesContainer.style.opacity = 1;
//     });
// };
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
const whereAmI = function (lat, long) {
  return fetch(
    `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${long}`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      //   console.log(data);
      //   console.log(`you are in ${data.address.city},${data.address.country}`);
      return getJSON(
        `https://restcountries.com/v3.1/name/${data.address.country}`,
        'country not found'
      );
    })
    .then(function (data2) {
      renderCountry(data2[0]);
      console.log(data2[0]);
      let neighbour = data2[0].borders[0];
      console.log(data2[0].borders[0]);
      return getJSON(
        `https://restcountries.com/v3.1/alpha/${neighbour}`,
        'country not fouud'
      );
    })
    .then(function (data3) {
      renderCountry(data3[0]);
    })
    .catch(err => console.log(err));
};
whereAmI(52.508, 13.381);
