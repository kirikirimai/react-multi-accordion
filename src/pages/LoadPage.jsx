import React, { useCallback, useEffect,useState } from 'react'
import { Link } from 'react-router-dom'
import { motion} from 'framer-motion';
import Accordion from '../componets/Accordion';
import AccordionChild from '../componets/AccordionChild';
import LoadDataAccrodion from '../componets/LoadDataAccrodion';


const LoadPage = () => {

    console.log("multi page")
    const defaultOpenIndex = 0
    const [jsonData, setJsonData] = useState([])
    const [openList, setOpenList] = useState([])
    const [openListChild, setOpenListChild] = useState([])
  
    const readJsonFile = async () => {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts")
        const json = await res.json()
      
        setOpenList(() => {
          return [...Array(json.length)].map((v, i) => i === defaultOpenIndex ? true : false)
        })

        setOpenListChild(()=>{
            return [...Array(json.length)].map((v, i) => false)
        })

        setJsonData(json)
      }
    
      useEffect(() => {
        readJsonFile()
      }, [])


    const onClickHandler=useCallback((index)=>{
        setOpenList(openList.map((open,i)=> i === index ? !open : false))
    },[openList])
      
  return (
    <div>
        <h2>多階層のアコーディオン</h2>
        <p>ホームは<Link to={"/"}>こちら</Link></p>

        <div className="accBlock">
        {jsonData.map((post, index) => {
          return (
            <Accordion key={index} index={index} post={post} onClickHandler={onClickHandler} openList={openList} >
                { index % 2 ==0 && <LoadDataAccrodion index={index} openListChild={openListChild} setOpenListChild={setOpenListChild} />}
            </Accordion>
          )
        })}
   
      </div>
    </div>
  )
}

export default LoadPage