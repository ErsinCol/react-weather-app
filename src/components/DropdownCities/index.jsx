import {cities} from "../../const/cities.js";
import {useCity} from "../../context/CityContext.jsx";

function DropdownCities(){
    const {selectedCity, setSelectedCity} = useCity();

    return (
        <div style={{backgroundColor: "#f1f1f1", padding: "1rem 2rem", borderRadius: "0.25rem"}}>
            <select
                name="cities"
                style={{padding: "0.5rem", border: "none", borderRadius: "0.25rem", backgroundColor: "white"}}
                onChange={(e) => setSelectedCity(e.target.value)}
                value={selectedCity}
            >
                {
                    cities.map((city, index) => (
                        <option key={index} value={city}>{city}</option>
                    ))
                }
            </select>
        </div>
    )
}

export default DropdownCities;