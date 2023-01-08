import React, { useCallback, useState } from 'react'
import { motion } from 'framer-motion';

const LoadDataAccrodion = ({ index, openListChild,setOpenListChild }) => {
    const [jsonData, setJsonData] = useState({})
    const [isLoaded,setIsLoaded]= useState(false)

    const readJsonFile = async (index) => {
        setIsLoaded(true)
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${index+1}`)
        console.log("fetch")
        const json = await res.json()
        console.log("json")
        await setJsonData(json)
        console.log("setdata")
        console.log(jsonData.length)
        await setOpenListChild(openListChild.map((open, i) => i === index ? !open : false))
    }

    const onLoadHandler = useCallback((index) => {
        if (jsonData.length > 0) {
            setOpenListChild(openListChild.map((open, i) => i === index ? !open : false))
        } else {
            readJsonFile(index);
        }

    },[openListChild])

    return (
        <div>
            <p onClick={() => onLoadHandler(index)}>さらに見る</p>
          
            {isLoaded && (
                <motion.div key="accordionchild" animate={{ height: openListChild[index] ? "100%" : "0" }} transition={0.3} className="accBlock__body">
                    <div className="inner">
                    <p>index:{index}</p>
                    <p> {jsonData.title}</p>
                    <p> {jsonData.body}</p>
                    </div>
                </motion.div>
            )}
        </div>
    )
}

export default LoadDataAccrodion