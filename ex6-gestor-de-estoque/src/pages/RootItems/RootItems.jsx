import { Link, Outlet } from "react-router-dom";
import styles from "./styles.module.css"

export default function RootItems() {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem'
        }}>
            <h1 style={{fontSize: '4rem'}}>Stock Items</h1>
            <div>
                <div style={{display: 'flex', gap: '1rem'}}>
                    <Link to="/items" className={styles.link}>Todos os itens</Link>
                    <Link to="create-item" className={styles.link}>Novo Item</Link>
                </div>
                <hr />
            </div>
            <Outlet />
        </div>
    )
}