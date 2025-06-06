import styles from "./styles.module.css"

export default function EditItem() {
    return (
        <>
            <form className={styles.form}>
                <div style={{display: 'flex', gap: '2rem'}}>
                    <div className={styles.formInput}>
                        <label htmlFor="name">Nome</label>
                        <input type="text" id="name" name="name"/>
                    </div>
                    <div className={styles.formInput}>
                        <label htmlFor="quantity">Quantidade</label>
                        <input type="number" id="quantity" name="quantity"/>
                    </div>
                    <div className={styles.formInput}>
                        <label htmlFor="price">Preço</label>
                        <input type="number" id="price" name="price"/>
                    </div>
                    <div className={styles.formInput}>
                        <label htmlFor="category">Categoria</label>
                        <input type="text" id="category" name="category"/>
                    </div>
                </div>
                <div className={styles.formInput}>
                    <label htmlFor="description">Descrição</label>
                    <textarea name="description" id="" cols="150" rows="15"></textarea>
                </div>
                <button>SALVAR</button>
            </form>
        </>
    )
}