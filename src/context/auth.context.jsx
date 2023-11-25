import { createContext } from "react";
import authService from "../services/auth.services";
import { useState } from "react";
import { useEffect } from "react";

const AuthContext = createContext()

function AuthProviderWraper(props) {

    const [loggedUser, setLoggedUser] = useState(null)

    const authUser = () => {

        const token = localStorage.getItem('authToken')

        if (token) {

            authService
                .verify(token)
                .then(({ data }) => setLoggedUser(data.loggedUser))
                .catch(err => console.log(err))

        }
    }

    useEffect(() => {
        authUser()
    }, [])


    return (
        <AuthContext.Provider value={{ loggedUser, authUser }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProviderWraper }