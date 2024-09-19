const apiKey = "30542d47f7c5649df54d92df257a51fe";
const apiUrl = 
"https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const navSearchBox = document.querySelector(".nav input");
const navSearchBtn = document.querySelector(".nav button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const responce = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(responce.status == 404){
        document.querySelector("#error").style.display = "block";
        document.querySelector("#weather").style.display = "none";
    }else{
        var data = await responce.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "images/clouds.png";
    }else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "images/clear.png";
    }else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "images/drizzle.png";
    }else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "images/mist.png";
    }else if(data.weather[0].main == "Snow"){
        weatherIcon.src = "images/snow.png";
    }

    document.querySelector("#weather").style.display = "block";
    document.querySelector("#error").style.display = "none";
}

    }
    
navSearchBtn.addEventListener("click", function(){
    checkWeather(navSearchBox.value);
})




