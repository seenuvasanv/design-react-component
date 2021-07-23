import { useContext } from 'react'
import ThemeProvider, { ThemeContext } from '../contexts/ThemeContext'

const LayoutNoThemeProvider = ({ children }) => {
    const { theme } = useContext(ThemeContext)

    return (
        <div className={`container-fluid light ${theme}`}>
            { children }
        </div>
    )
}

const Layout = ({ children, startingTheme }) => {
    return (
        <ThemeProvider startingTheme={startingTheme}>
            <LayoutNoThemeProvider>{ children }</LayoutNoThemeProvider>
        </ThemeProvider>
    )
}

export default Layout
