import { createContext, useState, useContext } from "react";
import listUsers from '../tempData/tablaUsuarios.json';

export const AuthContext = createContext();
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within a AuthProvider");
    }
    return context;
}
export const AuthProvider = ({ children }) => {
    const [users, setUsers] = useState(listUsers)
    const [user, setUser] = useState(null);
    const [isAutenticated, setIsAuthenticated] = useState(false);
    const signUp = (newUser) => {
        setUsers([...users, newUser]);
        setUser(newUser);
        signIn(newUser);
    }
    const signIn = (credentials) => {
        const foundUser = listUsers.find(u => u.email === credentials.email && u.password === credentials.password);
        if (foundUser) {
            setUser(foundUser);
            console.log(foundUser);
            setIsAuthenticated(true);
        } else {
            alert("Usuario o contraseña incorrectos");
            setUser(null);
        }
    }
    return (
        <AuthContext.Provider value={{signUp, user, signIn, isAutenticated}}>
            {children}
        </AuthContext.Provider>
    );
}