import { useEffect, useState } from 'react'
import '../App.css'
import { motion} from 'framer-motion';
import { Link } from 'react-router-dom';


function Home() {

  {/* 必要なデータ */}
  const defaultOpenIndex = 0
  const [jsonData, setJsonData] = useState([])
  const [openList, setOpenList] = useState([])

  const readJsonFile = async () => {
    const res = await fetch("/dummy.json")
    const json = await res.json()

    setOpenList(() => {
      return [...Array(json.faqs.length)].map((v, i) => i === defaultOpenIndex ? true : false)
    })
    setJsonData(json.faqs)
  }

  useEffect(() => {
    readJsonFile()
  }, [])

  const onClickHandler=(index)=>{
    setOpenList(openList.map((open,i)=> i === index ? !open : false))
  }


  console.log(openList)

  return (

    <div className="App">
      <h1>Framer Motionを利用したアコーディオン</h1>
      <p>多階層のアコーディオンは<Link to={'/multi/'}>こちら</Link></p>
      <p>データをローディングするアコーディオンは<Link to={'/load/'}>こちら</Link></p>
      <p>下記の条件でアコーディオン</p>
      <ul>
        <li>JSONファイルからデータを取ってくる</li>
        <li>最初のアコーディオンは開いている</li>
        <li>他のアコーディオンをクリックししたら開いてるアコーディオンは閉じる</li>
        <li>開いているアコーディオンをクリックしたらそのアコーディオンが閉じる</li>
      </ul>
      <hr />

      <ul className='openList'>
        {openList.map((open,i)=>{
          return(
            <li key={i}>{String(open)}</li>
          )
        })}
      </ul>

      <div className="accBlock">
        {jsonData.map((faq, index) => {
          return (
            <div key={index}>
              <div onClick={()=> onClickHandler(index)} className={`${"accBlock__btn"} ${openList[index]? "isClicked" :""}`}>{faq.question}</div>
              <motion.div key="accordion" animate={{height:openList[index] ? "100%": "0"}} transition={0.3} className="accBlock__body">
                <div className="inner">
                {faq.answer}
                </div>
              </motion.div>
            </div>
          )
        })}
   
      </div>
    </div>
  )
}

export default Home
