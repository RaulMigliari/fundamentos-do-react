import { Link } from "react-router-dom";
import styles from "./styles.module.css"

export default function RootItems() {
    return (
        <>
            <h1>Stock Items</h1>
            <div style={{display: 'flex', gap: '1rem'}}>
                <Link to="/items" className={styles.link}>Todos os itens</Link>
                <Link to="create-item" className={styles.link}>Novo Item</Link>
            </div>
            <hr />
        </>
    )
}