
const apikey = "936c2a97b971897677b497b6b370fd2c";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q="


const searchbox = document.querySelector(".search input")
const searchbut = document.querySelector(".search button")
const wi = document.querySelector(".weather-icon")


async function checkweather(city){
    const response = await fetch(apiurl+city+ `&appid=${apikey}`)
    var data  = await response.json();

    if(response.status==404){
        document.querySelector(".error").style.display= "block";
        document.querySelector(".weather").style.display= "none";
    }
    else{

    document.querySelector(".city-name").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp) +"°c";
    document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
    document.querySelector(".wind").innerHTML=data.wind.speed +" KM/H";

    if(data.weather[0].main=="Clouds"){
        wi.src = "images/clouds.png";
    }

    else if(data.weather[0].main=="Clear"){
        wi.src = "images/clear.png";
    } 
    else if(data.weather[0].main=="Rain"){
        wi.src = "images/rain.png";
    }
    else  if(data.weather[0].main=="Drizzle"){
        wi.src = "images/drizzle.png";
    } 
    else if(data.weather[0].main=="Mist"){
        wi.src = "images/mist.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display= "none";
}
}

searchbut.addEventListener("click",()=>{
    checkweather(searchbox.value);
})

