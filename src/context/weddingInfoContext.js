import React from "react";

const WeddingInfoContext = React.createContext();

export const WeddingInfoContextProvider = ({ children }) => (
    <WeddingInfoContext.Provider
        value={{
            Vietnam: {
                weddingDate: "",
                altWeddingDate: "Early 2022",
                shortLocation: "Vietnam",
                location: "",
            },
            USA: {
                weddingDate: "2021-09-06T00:00:00-05:00",
                altWeddingDate: "September 2021",
                shortLocation: "Texas",
                location: "New Braunfels, TX",
            },
        }}
    >
        {children}
    </WeddingInfoContext.Provider>
);

export default WeddingInfoContext;
