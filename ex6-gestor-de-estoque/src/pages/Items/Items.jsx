import { Link } from "react-router-dom"
import useStockCollection from "../../hooks/useStockCollection"
import styles from "./styles.module.css"

export default function Items() {

    const { stock, removeItem } = useStockCollection()

    return (
        <table className={styles.table}>
            <thead>
                <th>ID</th>
                <th>Nome</th>
                <th>Em Estoque</th>
                <th>Categoria</th>
                <th>Ações</th>
            </thead>
            <tbody>
                {stock.length > 0
                    ? stock.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.quantity} unidade(s)</td>
                            <td>{item.category}</td>
                            <td style={{display: 'flex', gap: '1rem'}}>
                                <Link to={`/items/${item.id}`}>
                                    <button className={styles.button} style={{backgroundColor: '#0084ff', }}>Ver</button>
                                </Link>
                                <Link to={`/items/edit-item/${item.id}`}>
                                    <button className={styles.button}>Atualizar</button>
                                </Link>
                                <button onClick={() => removeItem(item.id)} className={styles.button} style={{backgroundColor: '#f73b4b'}}>Excluir</button>
                            </td>
                        </tr>
                    )) : (
                        <p>Não há itens cadastrados no estoque!</p>
                    )
                }
            </tbody>
        </table>
    )
}