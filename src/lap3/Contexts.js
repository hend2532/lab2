import React from "react";

const HendContext = React.createContext();
const ContextProvider = HendContext.Provider;
const ContextConsumer = HendContext.Consumer;

export { ContextProvider, ContextConsumer };
