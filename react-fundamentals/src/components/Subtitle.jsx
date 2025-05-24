function sum(a,b) {
    return a + b
}

export default function Subtitle() {
    return <h2 style={{color: '#e5e5e5'}}>It's easy, like 1 + 2 is {sum(1,2)}</h2>
}