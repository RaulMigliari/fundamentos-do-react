import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div style={{display: 'flex', gap: '2rem'}}>
            <Link to={"/"}>Home</Link>
            <Link to={"/products"}>Produtos</Link>
            <Link to={"/cart"}>Cart</Link>
        </div>
    )
}