import { useState } from 'react'
import './styles/globals.css'

export default function App() {
  const [password, setPassword] = useState('')
  const [textButtonCopy, setTextButtonCopy] = useState('Copiar')

  function generatePassword() {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let length = 12
    let newPassword = ''
    for (let i = 0; i < length; i++) {
      const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
      newPassword += caracteres[indiceAleatorio];
    }
    setPassword(newPassword)
    setTextButtonCopy('Copiar')
  }

  return (
    <div className='app'>
      <h1>Gerador de senhas</h1>
      <div>
        <button onClick={generatePassword}>Gerar!</button>
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