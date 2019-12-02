import React from "react";

const WeddingInfoContext = React.createContext();

export const WeddingInfoContextProvider = ({ children }) => (
    <WeddingInfoContext.Provider
        value={{
            Vietnam: {
                weddingDate: "",
                altWeddingDate: "Early 2021",
                shortLocation: "Vietnam",
                location: "",
            },
            USA: {
                weddingDate: "2020-05-16T00:00:00-05:00",
                altWeddingDate: "May 2020",
                shortLocation: "Texas",
                location: "New Braunfels, TX",
            },
        }}
    >
        {children}
    </WeddingInfoContext.Provider>
);

export default WeddingInfoContext;
