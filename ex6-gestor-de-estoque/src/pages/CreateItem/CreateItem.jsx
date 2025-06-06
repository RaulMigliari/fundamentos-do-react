import { useState } from "react"
import styles from "./styles.module.css"
import useStockCollection from "../../hooks/useStockCollection"
import { useNavigate } from "react-router-dom"

export default function CreateItem() {

    const [name, setName] = useState('')
    const [quantity, setQuantity] = useState('')
    const [price, setPrice] = useState('')
    const [category, setCategory] = useState('')
    const [description, setDescription] = useState('')
    const { addItem } = useStockCollection()
    const navigate = useNavigate()

    const handleSubmit = (ev) => {

        ev.preventDefault()

        setName('')
        setQuantity('')
        setPrice('')
        setCategory('')
        setDescription('')

        addItem({name, quantity, price, category, description})
        alert('Item criado!')
        navigate('/items')
    }

    return (
        <>
            <form onSubmit={handleSubmit} className={styles.form}>
                <div style={{display: 'flex', gap: '2rem'}}>
                    <div className={styles.formInput}>
                        <label htmlFor="name">Nome</label>
                        <input 
                            type="text" 
                            id="name" 
                            name="name"
                            value={name}
                            onChange={(ev) => setName(ev.target.value)}
                        />
                    </div>
                    <div className={styles.formInput}>
                        <label htmlFor="quantity">Quantidade</label>
                        <input
                            type="number" 
                            id="quantity" 
                            name="quantity"
                            value={quantity}
                            onChange={(ev) => setQuantity(ev.target.value)}
                        />
                    </div>
                    <div className={styles.formInput}>
                        <label htmlFor="price">Preço</label>
                        <input 
                            type="number" 
                            id="price" 
                            name="price"
                            value={price}
                            onChange={(ev) => setPrice(ev.target.value)}
                        />
                    </div>
                    <div className={styles.formInput}>
                        <label htmlFor="category">Categoria</label>
                        <input 
                            type="text" 
                            id="category" 
                            name="category"
                            value={category}
                            onChange={(ev) => setCategory(ev.target.value)}
                        />
                    </div>
                </div>
                <div className={styles.formInput}>
                    <label htmlFor="description">Descrição</label>
                    <textarea 
                        name="description" 
                        id="description" 
                        cols="150" 
                        rows="15"
                        value={description}
                        onChange={(ev) => setDescription(ev.target.value)}
                    ></textarea>
                </div>
                <button type="submit">SALVAR</button>
            </form>
        </>
    )
}