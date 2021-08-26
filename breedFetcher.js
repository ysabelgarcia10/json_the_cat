const request = require('request');
const input = process.argv.slice(2);
const inputNoSpace = input.join('_');
const path = 'https://api.thecatapi.com/v1/breeds/search?q=' + inputNoSpace;

request(path, (error, response, body) => {
  //finds error first such as typo in URL
  if (error) {
    console.log("ERROR FOUND!!!");
    throw error;
  }
  
  //handles data
  const dataBody = JSON.parse(body);
  if (dataBody.length === 0) {
    console.log("Please enter a valid cat breed.");
  } else {
    console.log(dataBody[0].description);
  }
});
  