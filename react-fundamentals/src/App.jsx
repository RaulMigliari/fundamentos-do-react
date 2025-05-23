function sum (a,b) {
  return a + b
}

export default function App() {
  const tech = "React"

  return (
    <div className="App">
      <h1>{tech} is awesome!</h1>
      <h2>It's easy, like 1 + 2 is {sum(1,2)}</h2>
    </div>
  )
}