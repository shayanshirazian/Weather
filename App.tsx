import React, {useEffect, useState} from 'react';
import './App.css';

function celsiusToFahrenheit(celsius: number): number {
    return (celsius * 9) / 5 + 32;
}

function App() {
    // State variables for temperature and unit
    const [currentTempCelsius, setCurrentTempCelsius] = useState<number>(25);
    const [isCelsius, setIsCelsius] = useState<boolean>(true);
    const [weatherStatus, setWeatherStatus] = useState<string>('Sunny');

    // Function to toggle temperature unit
    const handleUnitChange = (): void => {
        setIsCelsius(!isCelsius);
    };

    // Function to fetch weather data
    const fetchWeatherData = (): void => {
        // Simulate fetching weather data
        setCurrentTempCelsius(24); // Simulating a fetch response
        setWeatherStatus("Sunny"); // Simulating a fetch response
    };

    // Fetch weather data on component mount
    useEffect(() => {
        fetchWeatherData();
    }, []);

    // Calculate displayed temperature based on current unit
    const displayedTemperature = isCelsius
        ? `${Math.round(currentTempCelsius)}°C`
        : `${Math.round(celsiusToFahrenheit(currentTempCelsius))}°F`;

    return (
        <div className="Main">
            <div className="container">
                <div className="Top">
                    <div className="TopLeft">
                        <div className="Location">
                            <span id="location">Iran, Tehran</span>
                        </div>
                    </div>
                    <div className="TopRight">
                        <div className="WeatherLogo">
                            <img id="weather-icon" src="/src/weather.svg" alt="Weather Icon"/>
                        </div>
                    </div>
                </div>
                <div className="Bottom">
                    <div className="BottomTop">
                        <div className="WeatherDegree">
                            <p id="temperature">{displayedTemperature}</p>
                        </div>
                        <div className="UnitChanger">
                            <button className="UnitChanger" id="unitchanger" onClick={handleUnitChange}>
                                Change Unit
                            </button>
                        </div>
                    </div>
                    <div className="BottomBottom">
                        <div className="WeatherStatus">
                            <span id="weather-status">{weatherStatus}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
