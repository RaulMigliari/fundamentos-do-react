import ContainerItems from "../components/ContainerItems/ContainerItems";
import ItemsTable from "../components/ItemsTable/ItemsTable";

export default function Dashboard() {
    return (
        <div style={{display: 'flex', flexDirection: 'column', gap: '3rem'}}>
            <h1 style={{fontSize: '4rem'}}>Dashboard</h1>
            <div style={{
                display: 'flex', 
                flexDirection: 'row',
                gap: '2rem'
            }}>
                <ContainerItems text="Diversidade de items" number="4" />
                <ContainerItems text="Diversidade de items" number="4" />
                <ContainerItems text="Diversidade de items" number="4" />
                <ContainerItems text="Diversidade de items" number="4" />
            </div>
            <div style={{display: 'flex', gap: '1rem'}}>
                <ItemsTable />
                <ItemsTable />
            </div>
        </div>
    )
}