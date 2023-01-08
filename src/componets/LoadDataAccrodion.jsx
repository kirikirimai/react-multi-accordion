import React from 'react'
import { motion} from 'framer-motion';

const LoadDataAccrodion = ({index,post,onClickChildHandler,openListChild}) => {

    return (
        <div>
            <p onClick={() => onClickChildHandler(index)}>さらに見る</p>
            <motion.div key="accordionchild" animate={{ height: openListChild[index] ? "100%" : "0" }} transition={0.3} className="accBlock__body">
                <div className="inner">
                    {post.body}
                </div>
            </motion.div>
        </div>
    )
}

export default LoadDataAccrodion