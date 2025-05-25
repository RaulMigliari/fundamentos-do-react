import { use, useState } from 'react'
import './styles/globals.css'

export default function App() {
  const [password, setPassword] = useState('')
  const [textButtonCopy, setTextButtonCopy] = useState('Copiar')
  const [passwordSize, setPasswordSize] = useState(12)

  function generatePassword() {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let newPassword = ''
    for (let i = 0; i < passwordSize; i++) {
      const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
      newPassword += caracteres[indiceAleatorio];
    }
    setPassword(newPassword)
    setTextButtonCopy('Copiar')
  }

  return (
    <div className='app'>
      <h1>Gerador de senhas</h1>
      <div className='input'>
        <label htmlFor="passwordSize">Tamanho:</label>
        <input
          type="number"
          id='passwordSize'
          min={1}
          value={passwordSize}
          onChange={(ev) => {setPasswordSize(ev.target.value)}}
        />
      </div>
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