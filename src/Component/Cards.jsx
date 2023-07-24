import React from 'react'

const Cards = (props) => {
    console.log(props.cardsData, "data");
    const data = props.cardsData
    return (
        <>
            {data.map((user, index) => (
                <div className='tt-row' key={index}>
                    <div className='icon'>
                        <img src={user.image} />
                    </div>
                    <div className='name-type'><h5>{user.text}</h5><span>Debit card</span></div>
                    <div className='amount-time'><h5 style={{ color: user.amount.includes('+') ? 'green' : 'red' }}>{user.amount}</h5><span>4:40pm</span>
                    </div>
                </div>
            ))}
        </>
    )
}

export default Cards