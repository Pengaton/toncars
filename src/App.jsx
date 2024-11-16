import './App.css'
import { TonConnectButton, TonConnectUIProvider } from '@tonconnect/ui-react'

function App() {
  return (
    <TonConnectUIProvider manifestUrl="https://github.com/Pengaton/toncars/blob/main/manifest.json">
      <TonConnectButton />
    </TonConnectUIProvider>
  )
}

export default App
