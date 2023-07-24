import React from 'react'
import Leftbar from '../Component/Leftbar'
import './style.css'
import Page from '../Component/Page'

const Mainpage = () => {
  return (
    <div className='Mainpage'>
        <Leftbar/>
        <Page/>
    </div>
  )
}

export default Mainpage