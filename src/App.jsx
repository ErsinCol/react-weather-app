import './App.css'
import DropdownCities from "./components/DropdownCities/index.jsx";
import WeatherReport from "./components/WeatherReport/index.jsx";
import {CityProvider} from "./context/CityContext.jsx";
function App() {
    return (
        <>
            <h1>Weather App</h1>
            <div>
                <CityProvider>
                    <DropdownCities />
                    <WeatherReport />
                </CityProvider>
            </div>
        </>
    )
}

export default App
