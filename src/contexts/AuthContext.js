import { createContext, useState } from "react"

const AuthContext = createContext()

const AuthProvider = ({children, initialLoggedInState}) => {
    const [loggedInState, setLoggedInState] = useState(initialLoggedInState)

    return (
        <AuthContext.Provider value={{
            loggedInState, setLoggedInState
        }}>
            {
                children
            }
        </AuthContext.Provider>
    )
}

export {
    AuthContext,
    AuthProvider
}
