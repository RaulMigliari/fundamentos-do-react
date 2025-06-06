import { useParams } from "react-router-dom"
import useStockCollection from "../../hooks/useStockCollection"
import styles from "./styles.module.css"
import { Link } from "react-router-dom"

export default function Item() {

    const { stock, removeItem } = useStockCollection()
    const { itemId } = useParams()

    const item = stock.find(i => i.id === +itemId)

    if (!item) {
        return (
            <h2>Oops... Esse produto não foi encontrado =(</h2>
        )
    }

    return (
        <div style={{display: 'flex', flexDirection: 'column', gap: '1.5rem '}}>
            <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
                <h1>{item.name}</h1>
                <div>
                    <Link to={`/items/edit-item/${item.id}`}><button className={styles.button}>Atualizar</button></Link>
                    <button onClick={() => removeItem(item.id)} className={styles.button} style={{backgroundColor: '#f73b4b'}}>Excluir</button>
                </div>
            </div>
            <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
                <div className={styles.container}>Categoria: {item.category}</div>
                <div className={styles.container}>Quantidade em estoque: {item.quantity}</div>
                <div className={styles.container}>Preço: R$ {item.price}</div>
            </div>
            <p>{item.description}</p>
            <p>Cadastrado em: {item.date}</p>
        </div>
    )
}