import React from 'react'




const CoinItem = (props) => {
  return (
    <div className='flex justify-between items-center bg-[#26272b] box-shadow: [0px 0px 12px #18191b] rounded-lg mx-[2rem] my-[1rem] px-[.7rem] py-[1rem] hover: scale-[1.04] ease-in-out duration-[.3s] cursor-pointer '>
        <p>{props.coins.market_cap_rank}</p>
        <div className='flex items-center'>
            <img src={props.coins.image} alt="/" />
            <p>{props.coins.symbol.toUpperCase()}</p>
        </div>
        <p>${props.coins.current_price.toLocaleString()}</p>
            <p>{props.coins.price_change_percentage_24h.toFixed(2)}%</p>
            <p className='max-w-[720px] hidden'>${props.coins.total_volume.toLocaleString()}</p>
            <p className='max-w-[720px] hidden'>${props.coins.market_cap.toLocaleString()}</p>
    </div>
  )
}

export default CoinItem;