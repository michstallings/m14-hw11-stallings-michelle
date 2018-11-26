const forecast = {
    "coord": {
        "lon": -117.67,
        "lat": 35.62
    },
    "weather": [
        {
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "03d"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 288.75,
        "pressure": 1024,
        "humidity": 20,
        "temp_min": 288.75,
        "temp_max": 288.75
    },
    "visibility": 16093,
    "wind": {
        "speed": 1.61,
        "deg": 34.5004
    },
    "clouds": {
        "all": 40
    },
    "dt": 1543262160,
    "sys": {
        "type": 1,
        "id": 371,
        "message": 0.0033,
        "country": "US",
        "sunrise": 1543243086,
        "sunset": 1543279099
    },
    "id": 5387494,
    "name": "California City",
    "cod": 200
};

let weatherWrapper = document.getElementById("wrapper");

let currentWeather = document.createTextNode(forecast.weather.description);

weatherWrapper.appendChild(currentWeather);