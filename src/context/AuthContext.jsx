import { useEffect, useState } from "react";
import { createContext } from "react";
import useLocalStorage from "use-local-storage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useLocalStorage('user', null)
    const [accessToken, setAccessToken] = useLocalStorage("token", "");

    const logout = () => {
        setUser(null)
        setAccessToken("")
    }
    return (
        <AuthContext.Provider value={{
            user,
            setUser,
            accessToken,
            setAccessToken,
            logout
        }} >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;