import { useContext } from "react"
import { AuthContext } from "../contexts/AuthContext"

const withAuth = (Component) => {
    return (props) => {
        const { loggedInState, setLoggedInState } = useContext(AuthContext)
        return <Component loggedInState={loggedInState} setLoggedInState={setLoggedInState} {...props}></Component>
    }
}

export default withAuth
