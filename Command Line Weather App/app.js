
const yargs = require ('yargs');
const request = require('request');
const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');


const argv = yargs
	.options({
		a:{
			alias: 'address',
			demandOption:true,
			describe:'Address to fetch weather for',
			string:true
		}
	})
	.help()
	.alias('help', 'h')
	.argv;



geocode.geocodeAddress(argv.address).then(
			(locationData) => {
			return weather.getWeather(locationData)
				})
		.then((weatherData) => {
			console.log('this');
			console.log(`It's currently ${weatherData.temperature} °F, and the humidity is ${weatherData.humidity*100} %.`);
				})
		.catch((errorMessage) => {
		console.log(errorMessage);
		})
	
	





