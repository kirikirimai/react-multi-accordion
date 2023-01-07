import React from 'react'
import { Link } from 'react-router-dom'

const Multi = () => {
  return (
    <div>
        <h2>多階層のアコーディオン</h2>
        <p>ホームは<Link to={"/"}>こちら</Link></p>
    </div>
  )
}

export default Multi