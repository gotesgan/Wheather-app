
import express from 'express';
import bodyParser from 'body-parser';

import axios from 'axios';


const app = express();
const port = 3000;


app.use(express.static('public'));


app.use(bodyParser.urlencoded({ extended: true }));

function loction(Latitude,Longitude ) {
this.Latitude = Latitude,
this.Longitude = Longitude
} 




app.get('/', (req, res) => {
  res.render('index.ejs');
});


app.use(express.json());



 app.post('/getlocation', (req, res) => {
  let Currntloction = new loction(req.body[0],req.body[1]);   
  console.log(Currntloction);  
      
      });


 app.get('/getWether', async (req, res) =>{

   
    

    try {
     
          const result = await axios.post(`http://api.weatherapi.com/v1/search.json?key=13288241d5614ad6b3782648243110&q=${Currntloction.loction.Latitude},${Currntloction.loction.Longitude}`);
  console.log(result.data)
  res.render("wheather.ejs")
    } catch (error) {
        res.send("Error 500: Could not retrieve weather data" )
    };

  

});



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
