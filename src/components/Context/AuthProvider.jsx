import { useState } from "react";
import {AuthContext} from "./AuthContext";


export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        const saved = sessionStorage.getItem("session");
            if (saved) {
                return JSON.parse(saved);
            }   
        return null;
    });

    const login = (name, password) => {
        if (name === "admin" && password === "1234") {
            const session = { name};
            setUser(session);
            sessionStorage.setItem("session", JSON.stringify(session));
            return true;
        }
        return false;
    };
    const logout = () => {
        setUser(null);
        sessionStorage.removeItem("session");
        alert("Cerrando sesión");
    }

    return <AuthContext.Provider value={{ user, login, logout }}>
        {children}
    </AuthContext.Provider>
};