import { Link, Outlet } from "react-router-dom";
import styles from "./styles.module.css"

export default function RootLayout () {  
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem'
        }}>
            <header className={styles.header}>
                <h2>REACT STOCK</h2>
                <div>
                    <Link to="/" className={styles.link}>Início</Link>
                    <Link to="items" className={styles.link}>Items</Link>
                </div>
            </header>
            <main>
                <Outlet />
            </main>
            <footer className={styles.footer}>
                Feito com React e React Router!
            </footer>
        </div>
    )
}