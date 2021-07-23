import { ThemeContext } from "./../contexts/ThemeContext"
import { useContext } from "react"
import withAuth from "./withAuth"

const Header = ({ loggedInState, setLoggedInState }) => {
    const { theme } = useContext(ThemeContext)

    const LoggedIn = ({ loggedInState, setLoggedInState }) => {
        return (<div>
            <span>Logged in as {loggedInState}</span>
            <button className="btn btn-secondary"
                onClick={
                    () => setLoggedInState('')
                }>Logout</button>
        </div>)
    }

    const NotLoggedIn = ({ loggedInState, setLoggedInState }) => {
        return (<button className="btn btn-secondary"
            onClick={
                e => {
                    e.preventDefault()
                    const user = window.prompt('Enter login name: ', '')
                    setLoggedInState(user)
                }
            }>
            Login
        </button>)
    }

    return (<div className="padT4 padB4">
        <div className="container mobile-container">
            <div className="d-flex justify-content-between">
                <div>
                    <img alt="SVCC Home page" src="/images/SVCCLogo.png" />
                </div>
                <div className="light">
                    <h4 className="header-title">
                        Silicon Valley Code Camp
                    </h4>
                </div>
                <div className={theme === 'light' ? "" : "text-info"}>
                    {
                        loggedInState && <LoggedIn loggedInState={loggedInState} setLoggedInState={setLoggedInState} />
                    }
                    {
                        !loggedInState && <NotLoggedIn loggedInState={loggedInState} setLoggedInState={setLoggedInState} />
                    }
                    {/* Hello Mr. Smith &nbsp;&nbsp;
                    <span>
                        <a href="#">
                            sign-out
                        </a>
                    </span> */}
                </div>
            </div>
        </div>
    </div>)
}

export default withAuth(Header)