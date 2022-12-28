import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Framer Motionを利用したアコーディオン</h1>
      <p>下記の条件でアコーディオン</p>
      <ul>
        <li>最初のアコーディオンは開いている</li>
        <li>他のアコーディオンをクリックししたら開いてるアコーディオンは閉じる</li>
        <li>開いているアコーディオンをクリックしたらそのアコーディオンが閉じる</li>
      </ul>
    </div>
  )
}

export default App
