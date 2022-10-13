export function getInfoWor(){
    return fetch("http://api.openweathermap.org/geo/1.0/direct?q=Wolfratshausen&limit=5&appid=411bec29b9573938be0d1cd077a45529").then((res)=>res.json())
}

export function getWetterWor(){
    return fetch("https://api.openweathermap.org/data/2.5/weather?lat=47.9104632&lon=11.4266377&units=metric&appid=411bec29b9573938be0d1cd077a45529").then((res)=>res.json())
}

export function getTemperaturWor(){
    return fetch("https://api.openweathermap.org/data/2.5/weather?lat=47.9104632&lon=11.4266377&appid=411bec29b9573938be0d1cd077a45529&units=metric").then((res)=>res.json())
}