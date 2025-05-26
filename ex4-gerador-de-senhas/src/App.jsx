import { useState } from 'react'
import './styles/globals.css'
import InputPasswordSize from './components/InputPasswordSize/InputPasswordSize'

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
        <InputPasswordSize passwordSize={passwordSize} setPasswordSize={setPasswordSize}/>
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