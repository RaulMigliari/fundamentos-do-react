import styles from "./styles.module.css"

const items = [
    {id: 1, name: "7 Wonders"},
    {id: 2, name: "O Senhor dos Anéis"}
]

export default function ItemsTable() {
    return (
        <table className={styles.table}>
            <thead>
                <tr>
                    <th>Itens Recentes</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {items.length > 0 
                    ? items.map((item) => (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>
                                <button className={styles.button}>Ver</button>
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