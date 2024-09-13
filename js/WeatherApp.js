// var container = document.querySelector(`.container`);
// var search = document.querySelector(`.search-box button`);
// var weather = document.querySelector(`.weather-box`);
// var weatherBox = document.querySelector(`.weather-details`);
// var error404 = document.querySelector(`.not-found`);

// search.addEventListener("click", function () {
//     var APIKey = "70dc98e9bd4ae063d682a28f76380d34";
//     var city = document.querySelector(`.search-box input`).value;


//     if (city == "")
//         return;
//     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=
// ${APIKey}`).then(Response => Response.json()).then(jason => {

//         if (jason.cod == `400`) {
//             container.style.height = `400px`;
//             weather.classList.remove(`active`);
//             weatherBox.classList.remove(`active`);
//             error404.classList.add(`active`);
//             return;
//         }

//         container.style.height = `555px`;
//         weather.classList.add(`active`);
//         weatherBox.classList.add(`active`);
//         error404.classList.remove(`active`);


//         var image = document.querySelector(`.weather-box img`);
//         var temperature = document.querySelector(`.weather-box .temperature`);
//         var description = document.querySelector(`.weather-box .description`);
//         var humidity = document.querySelector(`.weather-details .humidity span`);
//         var wind = document.querySelector(`.weather-details .wind span`);


//         switch ( jason.weather[0].main ) {
//             case `Clear`:
//                 image.src = 'img/1200px-Weather_icon_-_sunny.svg.png'
//                 break;

//             case `Rain`:
//                 image.src = 'img/weather-icon-png-17.png'
//                 break;

//             case `Snow`:
//                 image.src = 'img/39-396184_snowfall-png-pic-snowy-weather-clip-art.png'
//                 break;

//             case `Clouds`:
//                 image.src = 'img/23722-3-weather-image.png'
//                 break;

//             default:
//                 image.src = 'img/1816928.png';
//         }


//         temperature.innerHTML = `${parseInt(jason.main.temp)}<span>C°</span>`;
//         description.innerHTML = `${jason.weather[0].description}`;
//         humidity.innerHTML = `${jason.main.humidity}%`;
//         wind.innerHTML = `${parseInt(jason.main.speed)}Km/h`;

//     });

// });


var container = document.querySelector('.container');
var search = document.querySelector('.search-box button');
var weatherBox = document.querySelector('.weather-box');
var weatherDetails = document.querySelector('.weather-details');
var error404 = document.querySelector('.not-found');

search.addEventListener('click', function () {
    var APIKey = '70dc98e9bd4ae063d682a28f76380d34';
    var city = document.querySelector('.search-box input').value;

    if (city == '') return;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
        .then((response) => response.json())
        .then((json) => {
            if (json.cod === '404') {
                container.style.height = '500px';
                weatherBox.classList.remove('active');
                weatherDetails.classList.remove('active');
                error404.classList.add('active');
// var notFoundImage = document.querySelector(`.not-found img`);
// notFoundImage.src = `img/404-page-not-found-illustration-2048x998-yjzeuy4v.png`; 
                return;
            }

            container.style.height = '600px';
            weatherBox.classList.add('active');
            weatherDetails.classList.add('active');
            error404.classList.remove('active');

            var image = document.querySelector('.weather-box img');
            var temperature = document.querySelector('.weather-box .temperature');
            var description = document.querySelector('.weather-box .description');
            var humidity = document.querySelector('.weather-details .humidity span');
            var wind = document.querySelector('.weather-details .wind span');

            switch (json.weather[0].main) {
                case 'Clear':
                 image.src = 'img/1200px-Weather_icon_-_sunny.svg.png';
                    break;

                case 'Rain':
                    image.src = 'img/weather-icon-png-17.png';
                    break;

                case 'Snow':
                    image.src = 'img/39-396184_snowfall-png-pic-snowy-weather-clip-art.png';
                    break;

                case 'Clouds':
                    image.src = 'img/23722-3-weather-image.png';
                    break;

                default:
                    image.src = 'img/1816928.png';
            }

            temperature.innerHTML =` ${parseInt(json.main.temp)}<span>C°</span>`;
            description.innerHTML = `${json.weather[0].description}`;
            humidity.innerHTML = `${json.main.humidity}%`;
            wind.innerHTML = `${parseInt(json.wind.speed)}Km/h`;
        })
        .catch((error) => {
            console.error('Error fetching weather data:', error);
        });
});
