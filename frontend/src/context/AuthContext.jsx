import React, { createContext } from "react";

export const authDataContext = createContext();

function AuthContext({ children }) {
    const serverUrl = import.meta.env.VITE_API_URL;

    console.log("Server URL:", serverUrl);
    console.log(import.meta.env);

    return (
        <authDataContext.Provider value={{ serverUrl }}>
            {children}
        </authDataContext.Provider>
    );
}

export default AuthContext;