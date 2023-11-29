import { createContext } from 'react'
import authService from '../services/auth.services'
import { useState } from 'react'
import { useEffect } from 'react'

const AuthContext = createContext()

function AuthProviderWraper(props) {

    const [loggedUser, setLoggedUser] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        authUser()
    }, [])

    const authUser = () => {

        const token = localStorage.getItem('authToken')

        if (token) {

            authService
                .verify(token)
                .then(({ data }) => {
                    setLoggedUser(data.loggedUser)
                    setIsLoading(false)
                })
                .catch(err => console.log(err))
        } else {
            logout()
        }
    }

    const logout = () => {
        localStorage.removeItem('authToken')
        setLoggedUser(null)
        setIsLoading(false)
    }


    return (
        <AuthContext.Provider value={{ loggedUser, isLoading, authUser, logout }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProviderWraper }