;




 function getLoction(position){
    let location =[];
    location.push (position.coords.latitude,position.coords.longitude);
    console.log(position.coords.latitude,position.coords.longitude);
    fetch("/getlocation", {
        method: "POST", 
        headers: {
           'Content-Type': 'application/json'
        },
        body: JSON.stringify(location)
    }).then(response => {
        // this line of code depends upon what type of response you're expecting
        return response.text();     
    }).then(result => {
        console.log(result);
    }).catch(err => {
        console.log(err);
    });



   

   
  
}
function faliedToGett(position){
    fetch("/getlocation", {
        method: "POST", 
        headers: {
           'Content-Type': 'application/json'
        },
        body: JSON.stringify(err)
    }).then(response => {
        // this line of code depends upon what type of response you're expecting
        return response.text();     
    }).then(result => {
        console.log(result);
    }).catch(err => {
        console.log(err);
    });

}



$("#entry").click(async (e) => { 
  const result = navigator.geolocation.getCurrentPosition(getLoction,faliedToGett)
    
});