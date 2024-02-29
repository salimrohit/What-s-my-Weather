let weather = {
    'apiKey': '5147c3ce4e44556c54926082b10274f2',
    fetchWeather: function(city){
        fetch("https://api.openweathermap.org/data/2.5/weather?q="+ city +"&appid=" + this.apiKey).then((response)=>response.json()).then((data)=>this.displayWeather(data))
    },

    displayWeather: function(data){
        const {name} = data;
        const {icon, description} = data.weather[0];
        const {temp, humidity} = data.main;
        const {speed} = data.wind;
        console.log(name,icon,description,temp,humidity,speed);
        document.querySelector('.city').innerText = "Weather in " + name;
        document.querySelector('.icon').src = "https://openweathermap.org/img/w/"+ icon +".png";
        document.querySelector('.description').innerText = description;
        document.querySelector('.temp').innerText = temp + "°F";
        document.querySelector('.humidity').innerText = "Humidity: " + humidity + "%";
        document.querySelector('.wind').innerText = "Wind Speed : " + speed + "km/hr";
         
    },
    
    search : function(){
        this.fetchWeather(document.querySelector('.search-bar').value);
    }
};

document.querySelector('.search button').addEventListener("click",function(){
    weather.search();

})
