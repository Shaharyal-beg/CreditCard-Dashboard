import React from 'react'

const Investments = (props) => {

    const data = props.invest
  return (
    <>
    {data.map((user1,index)=>(
        <div className='it-row' key={index}>
          <div className='icon'><img src={user1.image} /></div>
          <div className='name-investment'>
            <h4>{user1.text}</h4>
            <span style={{ color: user1.amount.includes('+') ? 'green' : 'red' }}>{user1.amount}</span>
          </div>
        </div>))}
        </>
  )
}

export default Investments