import useStockCollection from "../../hooks/useStockCollection"
import styles from "./styles.module.css"
import { Link } from "react-router-dom";

export default function ItemsTableRecents() {

    const {stock} = useStockCollection()

    function isCreatedWithinLast10Days(item) {
        const createdAt = new Date(item.date);
        const now = new Date();
        const tenDaysAgo = new Date(now.setDate(now.getDate() - 10));
        return createdAt >= tenDaysAgo;
    }

    const itensRecentes = stock.filter(isCreatedWithinLast10Days)

    return (
        <table className={styles.table}>
            <thead>
                <tr>
                    <th>Itens Acabando</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {itensRecentes.length > 0 
                    ? itensRecentes.map((item) => (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>
                                <Link to={`items/${item.id}`}><button className={styles.button}>Ver</button></Link>
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