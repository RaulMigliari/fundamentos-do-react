import Card from "./Components/Card";
import swPosterImg from "./assets/sw-poster.jpg"
import esbPosterImg from "./assets/esb-poster.jpg"
import rotjPosterImg from "./assets/rotj-poster.jpg"


export default function App() {
  return (
    <>
      <h1>Exercício 2</h1>
      <Card title="Pôster: Star Wars (1977)" posterImg={swPosterImg}/>
      <Card title="Pôster: Empire Strikes Back (1980)" posterImg={esbPosterImg}/>
      <Card title="Pôster: Return of the Jedi (1983)" posterImg={rotjPosterImg}/>
    </>
  )
}
