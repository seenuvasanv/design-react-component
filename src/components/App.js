import Header from './Header'
import Speakers from './Speakers'
import Layout from './Layout'
import { AuthProvider } from '../contexts/AuthContext'

const App = () => {

    return (
        <AuthProvider initialLoggedInState='Seenuvasan'>
            <Layout startingTheme='dark'>
                <Header />
                <Speakers />
            </Layout>
        </AuthProvider>
    )
}

export default App
