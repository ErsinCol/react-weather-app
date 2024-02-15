import "./styles.css";
import {cities} from "../../const/cities.js";
import {useCity} from "../../context/CityContext.jsx";

function DropdownCities(){
    const {setSelectedCity} = useCity();

    return (
        <select
            name="cities"
            onFocus={(e) => e.target.size = 8}
            onBlur={(e)=> e.target.size = 1}
            onChange={(e) => {
                setSelectedCity(e.target.value)
                e.target.size = 1;
                e.target.blur();
            }}
        >
            {
                cities.map((city, index) => (
                    <option key={index} value={city}>{city}</option>
                ))
            }
        </select>
    )
}

export default DropdownCities;