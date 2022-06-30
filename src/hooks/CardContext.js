import React, { createContext, useContext, useEffect, useState } from "react";
import api from "../api/Api";

const CardContext = createContext()

export function CardWrapperProvider({ children }) {
    const [cartoes, setCartoes] = useState([]);

    useEffect(() => {

        api.get('/api/CartaoLead')
        .then((response) => setCartoes(response.data))

    }, [])

    return (
        <CardContext.Provider value={{ cartoes, setCartoes }}> 
            {children}
        </CardContext.Provider>
    )
}

export function useCardContext() {
    return useContext(CardContext)
}

