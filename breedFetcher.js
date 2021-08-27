const request = require('request');


const fetchBreedDescription = function(breedName, callback) {
  //URL path name
  const path = 'https://api.thecatapi.com/v1/breeds/search?q=' + breedName;

  request(path, (error, response, body) => {
    //finds error first such as typo in URL
    if (error) {
      callback(error, null);
    }
    
    //handles data, if data doesn't exist
    const dataBody = JSON.parse(body);
    if (dataBody.length === 0) {
      callback("Please enter a valid cat breed.", null);
    
    //if data is found or exists:
    } else {
      callback(null, dataBody[0].description);
    }
  });
};
  

module.exports = { fetchBreedDescription };