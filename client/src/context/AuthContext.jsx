import { createContext, useState, useContext } from "react";

export const AuthContext = createContext();
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within a AuthProvider");
    }
    return context;
}
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAutenticated, setIsAuthenticated] = useState(false);
    const signUp = (newUser) => {
        setUser(newUser);
    }
    return (
        <AuthContext.Provider value={{signUp, user, isAutenticated}}>
            {children}
        </AuthContext.Provider>
    );
}