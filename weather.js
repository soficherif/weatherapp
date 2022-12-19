"use strict"


const url = "https://api.openweathermap.org/data/2.5/weather?q=Manhattan&appid=e52f3c5b93466150baa9d7e0ef6b1126"


$.ajax ({
    url: url,
    success: function (result) {
        console.log(result);
        console.log(result.name);

        // Output of th location 
        let displayCity = `Current Weather in ${result.name}`;
        $("#location").html(displayCity);
        

        //Display the temp
        let F = Math.round(result.main.temp * (9/5) - 459.67);
        let displayTemp = `Temperature: ${F}&#176;F`;
        $("#temperature").html(displayTemp);

        //Display the wind

        let windSpeed = Math.round(result.wind.speed / .44704);
        let displayWind = `Wind: ${windSpeed} mph`;
       
        $("#wind").html(displayWind);

        //display Sky condition
        let displaySky = `Sky Condition: ${result.weather[0].description}`;
        $("#sky").html(displaySky);


    }
})