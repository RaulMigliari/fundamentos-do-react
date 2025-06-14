import { Link, useLoaderData } from "react-router-dom";

export default function Product() {

    const product = useLoaderData()
    // const { productId } = useParams()
    // const product = products.find(p => p.id === +productId)

    // if (!product) {
    //     return (
    //         <h2>Oops... Esse produto não foi encontrado =(</h2>
    //     )
    // }

    return (    
        <section>
            <Link to="/products">
                <button>Voltar</button>
            </Link>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>R$ {product.price}</p>
            <button>Comprar</button>
        </section>
    )
}