import useStockCollection from "../../hooks/useStockCollection"
import styles from "./styles.module.css"
import { Link } from "react-router-dom"

export default function ItemsTableFinishing() {

    const {stock} = useStockCollection()

    return (
        <table className={styles.table}>
            <thead>
                <tr>
                    <th>Itens Acabando</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {stock.length > 0 
                    ? stock
                    .filter(item => item.quantity <= 10)
                    .map((item) => (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>
                                <Link to={`/items/${item.id}`}><button className={styles.button}>Ver</button></Link>
                            </td>
                        </tr>
                    )) : (
                        <p>Não há itens recentes!</p>
                    )
                }
            </tbody>
        </table>
    )
}