import { useState } from "react"

const useTheme = (startingTheme = 'dark') => {
    const [theme, setTheme] = useState(startingTheme)

    return {
        theme, setTheme
    }
}

export default useTheme
