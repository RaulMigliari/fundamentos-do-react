import { useState } from 'react'
import './styles/globals.css'
import InputPasswordSize from './components/InputPasswordSize/InputPasswordSize'

export default function App() {
  const [password, setPassword] = useState('')
  const [textButtonCopy, setTextButtonCopy] = useState('Copiar')
  const [customSize, setCustomSize] = useState(12)
  const [showInput, setShowinput] = useState(false)

  const passwordSize = showInput ? customSize : 12

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
      <div style={{display: 'flex', marginBottom: '2rem'}}>
        <label htmlFor="showInput">Tamanho:</label>
        <input
          type="checkbox"
          id="showInput"
          value={showInput}
          onChange={() => setShowinput(showInput => !showInput)}
        />
      </div>
      {showInput ? (
        <div className='input'>
        <label htmlFor="customSize">Tamanho:</label>
        <InputPasswordSize passwordSize={customSize} setPasswordSize={setCustomSize}/>
      </div>
      ) : null}
      <div>
        <button onClick={generatePassword}>Gerar senha de {passwordSize} caracteres</button>
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