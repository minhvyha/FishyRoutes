import React, { useContext } from 'react'
import { MainPageContext } from "../App";


function Node({row, col}) {
  const {setNode} = useContext(MainPageContext)
  return (
    <div className='w-5 h-5 bg-white border-solid border-color border-black border' draggable={false} onClick={() => {this.preventDefault()}}>
      
    </div>
  )
}

export default Node