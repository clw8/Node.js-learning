
const request = require('request');


var getWeather = function (locationData) {
		console.log (locationData);
	return new Promise((resolve, reject) => {

request({url: `https://api.darksky.net/forecast/7f7d92098acde6871d20de0301b65ab5/${locationData.latitude},${locationData.longitude}`, json:true}, 
			(error, response, body) => {
					if(!error && response.statusCode===200){
						resolve({
							temperature: body.currently.temperature,
							humidity: body.currently.humidity});
					}
					else{
						reject('Unable to fetch weather');
					}

				
				
		})}
)};




module.exports = {getWeather};