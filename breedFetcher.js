const request = require('request');

const fetchBreedDescription = (catQuery, callback) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${catQuery}`, (error, response, body) => {
    if (error) {
      callback(error, null); // Call the callback with an error
      return;
    }
    if (response.statusCode !== 200) {
      callback(`Request failed with status code ${response.statusCode}`, null); // Call the callback with an error
      return;
    }
    if (body.length === 2) {   //Handle cat not found (not sure why its 2?? and return)
      callback("Cat breed match not found", null); // Call the callback with an error
      return;
    }
    
    let catInfo = JSON.parse(body);   //Parse the raw data into a JS object
    callback(null, catInfo[0]["description"]); // Call the callback with the cat description
  });
};



module.exports = { fetchBreedDescription };