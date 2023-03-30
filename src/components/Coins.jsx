import React from "react";
import CoinItem from "./CoinItem";

const Coins = () => {
  return (
    <div className="max-w-[1149px] m-auto">
      <div>
        <div className="flex justify-between items-center bg-[#26272b] box-shadow: [0px 0px 12px #18191b] rounded-lg mx-[2rem] my-[1rem] px-[.7rem] py-[1rem] font-bold">
          <p>#</p>
          <p className="ml-[-4rem]">Coin</p>
          <p>Price</p>
          <p>24h</p>
          <p className='max-w-[720px] hidden'>Volume</p>
          <p className='max-w-[720px] hidden'>Mkt Cap</p>
        </div>

        {props.coins.map(coins => {
            return (
                <CoinItem coins={coins} />
            )
        })}
      </div>
    </div>
  );
};

export default Coins;
