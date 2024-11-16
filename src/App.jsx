import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TonConnectButton, TonConnectUIProvider } from '@tonconnect/ui-react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <TonConnectUIProvider manifestUrl="">
      <TonConnectButton />
    </TonConnectUIProvider>
  )
}

export default App
