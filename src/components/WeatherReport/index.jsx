import "./styles.css";
import {useCity} from "../../context/CityContext.jsx";
import {useEffect, useState} from "react";
import {convertWeekday} from "../../utils/convertWeekday.js";

const apiKey = ""

function WeatherReport(){
    const [weatherData, setWeatherData] = useState([]);
    const [loading, setLoading] = useState(false);
    const {selectedCity} = useCity();

    useEffect(()=>{
        setLoading(true)
        fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${selectedCity}&appid=${apiKey}`)
            .then(response => response.json())
            .then(coding => {
                fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${coding[0].lat}&lon=${coding[0].lon}&exclude=current,hourly,minutely,alerts&units=metric&appid=${apiKey}`)
                    .then(response => response.json())
                    .then(data => {
                        setWeatherData(data.daily.slice(0,7));
                        setLoading(false);
                    })
            })
            .catch(err => {
                console.error("Error fetching weather data ", err);
                setLoading(false);
            })
    }, [selectedCity])

    return (
        <>
            { loading &&
                <div style={{display:"flex", alignItems: "center", justifyContent: "center", padding: "3rem"}}>
                    <div className="loader"></div>
                </div>
            }
            {!loading && (
                <ul className="day-list">
                    {weatherData.map((day, index) => (
                        <li
                            className={`${index === 0 && "current-day"} day`}
                            key={index}
                        >
                            <div>{convertWeekday(day.dt)}</div>
                            <img src={`https://openweathermap.org/img/wn/${day.weather[0].icon}.png`} width={75} height={75}/>
                            <div style={{display: "flex", alignItems: "center", justifyContent: "center", gap: "0.25rem"}}>
                                <small style={{fontWeight: "bold"}}>{Math.trunc(day.temp.max)}<sup>°</sup></small>
                                <small>{Math.trunc(day.temp.min)}<sup>°</sup></small>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </>
    )
}

export default WeatherReport;