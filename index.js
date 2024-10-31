// Import necessary modules
import express from 'express';
import bodyParser from 'body-parser';

import axios from 'axios';



// Initialize the express app and set the port
const app = express();
const port = 3000;


// Serve static files from the 'public' directory
app.use(express.static('public'));

// Use bodyParser to parse URL-encoded data
app.use(bodyParser.urlencoded({ extended: true }));

// Initialize an array to store location data
function Location (Latitude ,Longitude ){
  this.Latitude=Latitude,
  this.Longitude=Longitude
}

// Define the route for the root path (GET request)
// This renders the 'index.ejs' view when the root URL is accessed
app.get('/', (req, res) => {
  res.render('index.ejs');
});
app.use(bodyParser.json());

app.post("/getlocation",async (req, res)=> {
let location = new Location(req.body[0],req.body[1])
console.log(location)
const result = await axios.get(`http://api.weatherapi.com/v1/current.json?key=13288241d5614ad6b3782648243110&q=${location.Latitude},${location.Longitude}&aqi=no`)
console.log(result.data)

});









// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
