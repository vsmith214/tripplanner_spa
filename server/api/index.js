const express = require('express');
const router = express.Router();
const models = require('../../models');
const {Place} = models;
const {Hotel} = models;
const {Activity} = models;
const {Restaurant} = models;

module.exports = router;


const findHotel = Hotel.findAll({include: [{ all: true }] });
const findActivity = Activity.findAll({include: [{ all: true }] });
const findRestaurant = Restaurant.findAll({include: [{ all: true }] });



router.get('/attractions', function(req, res, next) {
	Promise.all([findHotel, findActivity, findRestaurant])
		.then(([hotels, activities, restaurants]) => {
			// let hotels = results[0];
			// let activities = results[1];
			// let restaurants = results[1];
			res.json({hotels, activities, restaurants});
		})
		.catch(next);
})


// fetch('/hotels')
// 	.then(result => result.json())
// 	.then(data => {
// 		console.log(data)
// 	})
// 	.catch(console.error)