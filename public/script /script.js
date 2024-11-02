function getLocation(position) {
    let location = [];
    location.push(position.coords.latitude, position.coords.longitude);
    console.log(position.coords.latitude, position.coords.longitude);

    fetch("/getlocation", {
        method: "post",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(location)
    })
    .then(response => response.text()) // Adjust according to the expected response type
    .then(result => {
        console.log(result);
    })
    .catch(err => {
        console.log(err);
    });
}

function failedToGet() {
    console.log("Failed to retrieve location");
}

$("#entry").click((e) => { 
    navigator.geolocation.getCurrentPosition(getLocation, failedToGet);
});
