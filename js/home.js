/*
// this is the path to the json file
let requestURL = '../data.json';
// this is a object instance of XMLHttpRequest
let request = new XMLHttpRequest();

// HTTP menthod to use when making the network request / GET
request.open('GET', requestURL);
// JSON is converted into the JS object
request.responseType = 'json';
// send a request with the send method
request.send();

request.onload = () => {
  const paintingsData = request.response;
  console.log(paintingsData);
};
*/

fetch('../data.json')
  .then((response) => response.json())
  .then((data) => console.log(data));
