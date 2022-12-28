import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [jsonData,setJsonData]=useState([])

  const readJsonFile=async()=>{
    const res = await fetch("/dummy.json")
    const json=await res.json()

    setJsonData(json.faqs)
  }
  useEffect(()=>{

    readJsonFile()
  },[])

  console.log(jsonData)

  return (
    <div className="App">
      <h1>Framer Motionを利用したアコーディオン</h1>
      <p>下記の条件でアコーディオン</p> 
      <ul> 
        <li>JSONファイルからデータを取ってくる</li>
        <li>最初のアコーディオンは開いている</li>
        <li>他のアコーディオンをクリックししたら開いてるアコーディオンは閉じる</li>
        <li>開いているアコーディオンをクリックしたらそのアコーディオンが閉じる</li>
      </ul>
      <hr />

      <div className="accBlock">
        <div className="accBlock__btn">
          アコーディオンタイトル
        </div>
        <div className="accBlock__body">
          <p>アコーディオンの内容</p>
        </div>
        <div className="accBlock__btn">
          アコーディオンタイトル
        </div>
        <div className="accBlock__body">
          <p>アコーディオンの内容</p>
        </div>
      </div>
    </div>
  )
}

export default App
