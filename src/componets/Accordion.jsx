import React from 'react'
import { motion} from 'framer-motion';

const Accordion = ({index,post,onClickHandler,openList,children}) => {
    console.log("parent")
    return (
        <div>
            <div onClick={() => onClickHandler(index)} className={`${"accBlock__btn"} ${openList[index] ? "isClicked" : ""}`}>{post.title}</div>
            <motion.div key="accordion" animate={{ height: openList[index] ? "100%" : "0" }} transition={0.3} className="accBlock__body">
                <div className="inner">
                    {post.body}
                    {children}
                </div>
            </motion.div>
        </div>
    )
}

export default Accordion