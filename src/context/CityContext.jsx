import {createContext, useContext, useState} from "react";

const CityContext = createContext();

const CityProvider = ({children}) => {
    const [selectedCity, setSelectedCity] = useState("İstanbul");

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