import {useCity} from "../../context/CityContext.jsx";

function WeatherReport(){
    const {selectedCity} = useCity();

    return (
        <div>{selectedCity} şehrinin hava durumu bilgileri...</div>
    )
}

export default WeatherReport;