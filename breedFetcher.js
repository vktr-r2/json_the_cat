const request = require('request');
let catQuery = (process.argv.slice(2, process.argv.length));

catQuery = catQuery.join(' ');    //Allows for input to be multiple words (American short )


request(`https://api.thecatapi.com/v1/breeds/search?q=${catQuery}`, (error, response, body) => {
  if (error) {
    console.log('error:', error); // Print the error if one occurred
  }
  if (response.statusCode !== 200) console.log('statusCode:', response && response.statusCode);   //Handle response failure
  if (body.length === 2) {   //Handle cat not found (not sure why its 2?? and return)
    console.log("Cat breed match not found");
    return;
  }

  let catinfo = JSON.parse(body);   //Parse the raw data into a JS object

  for (cat in catinfo) {          // Print description for each matching breed
    console.log(catinfo[0]["description"]);
    console.log("====================");
  }
});
