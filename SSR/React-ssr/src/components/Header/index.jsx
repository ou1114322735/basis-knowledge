import React from 'react'
import {Link} from 'react-router-dom'
export default function index() {
  return (
    <div>
        <Link to='/'>Home</Link>
        <Link to='/movies'>电影页</Link>
    </div>
  )
}
