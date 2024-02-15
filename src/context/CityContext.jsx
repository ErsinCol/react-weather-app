import {createContext, useContext, useEffect, useState} from "react";

const CityContext = createContext();

const CityProvider = ({children}) => {
    const [selectedCity, setSelectedCity] = useState("Ankara");

    useEffect(() => {
        const successCallback = (position) => {
            fetch(`http://api.geonames.org/findNearbyJSON?lat=${position.coords.latitude}&lng=${position.coords.longitude}&username=username`)
                .then(response => response.json())
                .then(data => setSelectedCity(data.geonames[0].adminName1))
                .catch(error => console.error("Error:", error));
        }

        const errorCallback = (error) => {
            console.log(error)
        }

        navigator.geolocation.getCurrentPosition(successCallback, errorCallback)
    }, []);

    const values = {
        selectedCity,
        setSelectedCity
    }

    return (
        <CityContext.Provider value={values}>{children}</CityContext.Provider>
    )
}

const useCity = () => useContext(CityContext)

export {
    useCity,
    CityProvider
}