const request = require('request');
const catQuery = (process.argv.slice(2, process.argv.length));


request(`https://api.thecatapi.com/v1/breeds/search?q=${catQuery}`, (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  if (response.statusCode !== 200) console.log('statusCode:', response && response.statusCode);   //Handle response failure
  if (body.length === 2) {   //Handle cat not found (not sure why its 2?? and return)
    console.log("Cat breed match not found");
    return;
  }
  console.log('body:', JSON.parse(body)); // Print the result of the GET call based on catQuery input
});
