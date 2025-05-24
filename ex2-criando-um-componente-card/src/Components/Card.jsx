import styles from '../App.module.css'

export default function Card() {
    return (
        <div className={styles.card}>
            <img src="https://i.pinimg.com/originals/ba/94/64/ba9464145eba8762f6286a3c8387c951.jpg" alt="star-wars" />
            <div>
                <h1>Pôster: Star Wars (1977)</h1>
                <p>
                    Um pôster decorativo épico do filme Star Wars, com moldura de MDF e tamanho
                    A3. Uma ótima recordação de um dos mais icônicos filmes de todos os tempos.
                    Este clássico pôster trará aventura, nostalgia e a magia de Star Wars
                    para qualquer lugar que você decidir pendurar. Não perca a chance de adicionar
                    essa linda memória ao seu acervo.
                </p>
                <button>Comprar agora</button>
            </div>
        </div>
    )
}