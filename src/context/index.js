import React from "react";
import { WeddingInfoContextProvider } from "./weddingInfoContext";

const GlobalContext = React.createContext();

export const ContextProvider = ({ children }) => (
    <GlobalContext.Provider
        value={{
            adminRoutes: ["/linh-only", "/invitation"],
        }}
    >
        <WeddingInfoContextProvider>{children}</WeddingInfoContextProvider>
    </GlobalContext.Provider>
);

export default GlobalContext;
