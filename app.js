document.getElementById('getWeather').addEventListener('click', async function() {
    const city = document.getElementById('city').value;

    if (!city) {
        alert('Please enter a city name');
        return;
    }

    try {
        // Define the API endpoint and the API key (replace with your key)
        const apiKey = '709b58ea94f5082d31509fc53e4402cd'; // Replace this with your actual API key
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        // Fetch weather data from OpenWeather API
        const response = await fetch(url);
        const data = await response.json();

        // Check if the city is found
        if (data.cod === 200) {
            const weatherInfo = data.main;
            const weatherinfo = parseInt(weatherInfo.temp);
            const weatherDescription = data.weather[0].description;
            const windSpeed = data.wind.speed;
            function getWeatherIcon(description) {
                switch (description.toLowerCase()) {
                    case 'clear sky':
                        return 'wb_sunny'; // Sunny icon
                    case 'few clouds':
                    case 'scattered clouds':
                    case 'broken clouds':
                        return 'cloud'; // Cloudy icon
                    case 'overcast clouds':
                        return 'cloud_queue'; // Overcast clouds
                    case 'light rain':
                    case 'moderate rain':
                    case 'heavy intensity rain':
                    case 'very heavy rain':
                    case 'extreme rain':
                        return 'umbrella'; // Rain icon
                    case 'freezing rain':
                        return 'ac_unit'; // Freezing rain icon
                    case 'light intensity drizzle':
                    case 'drizzle':
                    case 'heavy intensity drizzle':
                    case 'light intensity drizzle rain':
                    case 'drizzle rain':
                    case 'heavy intensity drizzle rain':
                        return 'grain'; // Drizzle icon
                    case 'thunderstorm with light rain':
                    case 'thunderstorm with rain':
                    case 'thunderstorm with heavy rain':
                    case 'light thunderstorm':
                    case 'thunderstorm':
                    case 'heavy thunderstorm':
                    case 'ragged thunderstorm':
                        return 'flash_on'; // Thunderstorm icon
                    case 'light snow':
                    case 'snow':
                    case 'heavy snow':
                    case 'sleet':
                    case 'light shower sleet':
                    case 'shower sleet':
                    case 'light rain and snow':
                    case 'rain and snow':
                    case 'light shower snow':
                    case 'shower snow':
                    case 'heavy shower snow':
                        return 'ac_unit'; // Snow icon
                    case 'mist':
                    case 'fog':
                    case 'haze':
                        return 'blur_on'; // Mist/fog/haze icon
                    case 'smoke':
                        return 'smoke_free'; // Smoke icon
                    case 'sand':
                    case 'dust':
                    case 'sand/dust whirls':
                        return 'waves'; // Sand/dust icon
                    case 'volcanic ash':
                        return 'terrain'; // Volcanic ash icon
                    case 'tornado':
                        return 'settings'; // Tornado icon
                    case 'squalls':
                        return 'air'; // Squall icon
                    default:
                        return 'help_outline'; // Default/unknown condition
                }
            }
            const icon = getWeatherIcon(weatherDescription);
                document.getElementById('weatherInfo').style.display = 'block';
                document.getElementById('weatherInfo').innerHTML = `
                <span class = "material-icons" class = "cloud">${icon}</span>
                    <p><strong>Temperature:</strong> ${weatherinfo}°C</p>
                    <p><strong>Humidity:</strong> ${weatherInfo.humidity}%</p>
                    <p><strong>Wind Speed:</strong> ${windSpeed} m/s</p>
                `;
            
        

            // Display weather data
          
        } else {
            // If city not found
            document.getElementById('weatherInfo').style.display = 'none';
            alert('City not found. Please try again.');
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
        alert('An error occurred while fetching weather data.');
    }
});
