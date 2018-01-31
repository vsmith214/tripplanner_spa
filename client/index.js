const mapboxgl = require("mapbox-gl");
const buildMarker = require("./marker.js");
// const apiRouter = require('../Server/api');

mapboxgl.accessToken = "pk.eyJ1Ijoic3NkaW5nIiwiYSI6ImNqZDF1bWd0eDBqZHEyd3FkeTl1cWl0eXEifQ.pADo8vPfJruwJ_mGmTbQhw";


// fetch('/hotels')
// 	.then(result => {
// 		const selectHotels = document.getElementById('hotels-choices');
// 		hotels.forEach(hotel => {
// 			selectHotels.appendChild('option').value(hotel.dataValues.name);
// 		})

// 	})

fetch('/api/attractions')
	.then(attractions => {
		const selectHotels = document.getElementById('hotels-choices');
		const option = document.createElement('option');
		option.value = 'attractions.hotels';
		selectHotels.appendChild(option);
		// selectHotels.appendChildren('option').label(attractions.hotels);
	})
	// .then(jsonresult => console.log(jsonresult))



	// es6 templates
	// each attraction an html code hotels-choices
	// `${attractions}-choices`
	// select option


const fullstackCoords = [-74.009, 40.705] // NY
// const fullstackCoords = [-87.6320523, 41.8881084] // CHI

const map = new mapboxgl.Map({
  container: "map",
  center: fullstackCoords, // FullStack coordinates
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

const marker = buildMarker("activities", fullstackCoords);
marker.addTo(map);


module.exports = {

}