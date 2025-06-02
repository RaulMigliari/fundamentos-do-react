import UserContext from "./contexts/UserContext"
import UserInfo from "./components/UserInfo"
import Container from "./components/Container"
import Header from "./components/Header"

export default function App() {

    const user = {
        name: 'Raul',
        email: 'raul@email.com'
    }

    return (
        <>
            <UserContext.Provider value={user}>
                <Header/>
                <h1>Usando o Contexto</h1>
                <Container>
                    <p>Este é nosso app com contexto</p>
                </Container>
            </UserContext.Provider>
            <div>
                {/* não há acesso ao contexto aqui */}
            </div>
        </>
    )
}