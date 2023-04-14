const { fetchBreedDescription } = require('./breedFetcher');


let catQuery = (process.argv.slice(2, process.argv.length));  //Accept input
catQuery = catQuery.join(' ');    // join() allows for input to be multiple words (Example: "American short" )


fetchBreedDescription(catQuery, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});