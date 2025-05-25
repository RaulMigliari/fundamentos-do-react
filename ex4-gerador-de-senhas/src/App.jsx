import { useState } from 'react'
import './styles/globals.css'

export default function App() {
  const [password, setPassword] = useState('')
  const [textButtonCopy, setTextButtonCopy] = useState('Copiar')

  function generatePassword(size) {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let resultado = '';
    for (let i = 0; i < size; i++) {
      const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
      resultado += caracteres[indiceAleatorio];
    }
    return resultado;
  }

  return (
    <div className='app'>
      <h1>Gerador de senhas</h1>
      <div>
        <button onClick={() => setPassword(generatePassword(10))}>Gerar!</button>
        <button 
        onClick={() => {
          navigator.clipboard.writeText(password)
          setTextButtonCopy('Copiado!')
        }}
        >
          {textButtonCopy}
        </button>
      </div>
      <span>{password}</span>
    </div>
  )
}