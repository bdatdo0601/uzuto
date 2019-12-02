import React from "react";
import { WeddingInfoContextProvider } from "./weddingInfoContext";

const ContextProvider = ({ children }) => <WeddingInfoContextProvider>{children}</WeddingInfoContextProvider>;

export default ContextProvider;
