document.getElementById('getWeather').addEventListener('click', async function() {
    const city = document.getElementById('city').value;

    if (!city) {
        alert('Please enter a city name');
        return;
    }

    try {
        // Define the API endpoint and the API key (replace with your key)
        const apiKey = '709b58ea94f5082d31509fc53e4402cd'; // Replace this with your actual API key
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

        // Fetch weather data from OpenWeather API
        const response = await fetch(url);
        const data = await response.json();

        // Check if the city is found
        if (data.cod === 200) {
            const weatherInfo = data.main;
            const weatherinfo = parseFloat(weatherInfo.temp)/32;
            const weatherDescription = data.weather[0].description;
            const windSpeed = data.wind.speed;
            switch(weatherDescription){
                case 'clear sky':
                    document.getElementById('weatherInfo').style.display = 'block';
                   document.getElementById('weatherInfo').innerHTML = `
                <p><strong>Temperature:</strong> ${weatherinfo}°C</p>
                <p><strong>Humidity:</strong> ${weatherInfo.humidity}%</p>
                <span class= "material-icons">sunny</span>
                <p><strong>Wind Speed:</strong> ${windSpeed} m/s</p>
            `; break;
            case 'few clouds':
                document.getElementById('weatherInfo').style.display = 'block';
            document.getElementById('weatherInfo').innerHTML = `
                <p><strong>Temperature:</strong> ${weatherinfo}°C</p>
                <p><strong>Humidity:</strong> ${weatherInfo.humidity}%</p>
                <span class = "material-icons">cloud</span>
                <p><strong>Wind Speed:</strong> ${windSpeed} m/s</p>
            `;break;
            case 'scattered clouds':
                document.getElementById('weatherInfo').style.display = 'block';
            document.getElementById('weatherInfo').innerHTML = `
                <p><strong>Temperature:</strong> ${weatherinfo}°C</p>
                <p><strong>Humidity:</strong> ${weatherInfo.humidity}%</p>
                <span class = "material-icons">cloud</span>
                <p><strong>Wind Speed:</strong> ${windSpeed} m/s</p>
            `;
            break;
            case 'broken clouds':
                document.getElementById('weatherInfo').style.display = 'block';
            document.getElementById('weatherInfo').innerHTML = `
            <span class = "material-icons">cloud</span>
                <p><strong>Temperature:</strong> ${weatherinfo}°C</p>
                <p><strong>Humidity:</strong> ${weatherInfo.humidity}%</p>
                <p><strong>Wind Speed:</strong> ${windSpeed} m/s</p>
            `;break;
            case 'overcast clouds':
                document.getElementById('weatherInfo').style.display = 'block';
            document.getElementById('weatherInfo').innerHTML = `
            <span class = "material-icons">cloud</span>
                <p><strong>Temperature:</strong> ${weatherinfo}°C</p>
                <p><strong>Humidity:</strong> ${weatherInfo.humidity}%</p>
                <p><strong>Wind Speed:</strong> ${windSpeed} m/s</p>
            `;
            break;
            default:
                document.getElementById('weatherInfo').style.display = 'block';
                document.getElementById('weatherInfo').innerHTML = `
                <span class = "material-icons">cloud</span>
                    <p><strong>Temperature:</strong> ${weatherinfo}°C</p>
                    <p><strong>Humidity:</strong> ${weatherInfo.humidity}%</p>
                    <p><strong>Wind Speed:</strong> ${windSpeed} m/s</p>
                `;
                break;
            }

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
