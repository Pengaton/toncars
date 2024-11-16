import './App.css'
import { TonConnectButton, TonConnectUIProvider } from '@tonconnect/ui-react'

function App() {
  return (
    <TonConnectUIProvider manifestUrl="https://raw.githubusercontent.com/Pengaton/toncars/refs/heads/main/public/manifest.json">
      <TonConnectButton />
    </TonConnectUIProvider>
  )
}

export default App
