const apiKey='e8d3ba3634b453351d32d33e033c0963';  
const apiUrl='https://api.openweathermap.org/data/2.5/weather?&units=metric&q=';

const search=document.querySelector('#search');     
const click=document.querySelector('#click');       
const weatherIcon=document.querySelector('#weatherIcon');

async function checkWeather(city)
{
    const response=await fetch(apiUrl+city+`&appid=${apiKey}`);
    if(response.status==404){
        document.querySelector('.error-message').style.display='block';
        document.querySelector('.disp').style.display='none';
    }

    else
    {
        var data=await response.json();
        document.querySelector('.city').innerHTML=data.name;
        document.querySelector('.temp').innerHTML=Math.round(data.main.temp)+'°C';
        document.querySelector('.humidity').innerHTML=data.main.humidity +'%';
        document.querySelector('.wind').innerHTML=data.wind.speed +' Km/H';

    
        switch(data.weather[0].main){
     
            case 'Clouds' :weatherIcon.src='images/clouds.png'; 
            break;
            case 'Clear' :weatherIcon.src='images/clear.png'; 
            break;
            case 'Snow' :weatherIcon.src='images/snow.png'; 
            break;
            case 'Rain' :weatherIcon.src='images/rain.png'; 
            break;
            case 'Drizzle' :weatherIcon.src='images/drizzle.png'; 
            break;
            case 'Mist' :weatherIcon.src='images/mist.png'; 
            break;
        }
        document.querySelector('.hidden').style.display='block';
    } 
}

click.addEventListener('click',()=>{
    checkWeather(search.value);
})