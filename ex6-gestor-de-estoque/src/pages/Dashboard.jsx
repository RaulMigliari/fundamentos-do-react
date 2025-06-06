import ContainerItems from "../components/ContainerItems/ContainerItems";
import ItemsTableFinishing from "../components/ItemsTableFinishing/ItemsTableFinishing";
import ItemsTableRecents from "../components/ItemsTableRecents/ItemsTableRecents";

export default function Dashboard() {

    const items = JSON.parse(localStorage.getItem("obc-stock")) || [];

    const diversidadeDeItems = new Set(items.map(item => item.category)).size;
    const inventarioTotal = items.reduce((acc, item) => acc + parseFloat(item.quantity), 0);
    const itensRecentes = items.slice(-4).length;
    const itensAcabando = items.filter(item => item.quantity <= 10).length;

    return (
        <div style={{display: 'flex', flexDirection: 'column', gap: '3rem'}}>
            <h1 style={{fontSize: '4rem'}}>Dashboard</h1>
            <div style={{
                display: 'flex', 
                flexDirection: 'row',
                gap: '2rem'
            }}>
                <ContainerItems text="Diversidade de items" number={diversidadeDeItems} />
                <ContainerItems text="Inventário total" number={inventarioTotal} />
                <ContainerItems text="Itens recentes" number={itensRecentes} />
                <ContainerItems text="Itens acabando" number={itensAcabando} />
            </div>
            <div style={{display: 'flex', gap: '1rem'}}>
                <ItemsTableRecents />
                <ItemsTableFinishing />
            </div>
        </div>
    )
}