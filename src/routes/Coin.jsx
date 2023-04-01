import { useParams } from "next/router";
import axios from "axios";
import React, { useState, useEffect } from "react";
import DOMPurify from 'dompurify'

const Coin = () => {
  const params = useParams();
  const [coin, setCoin] = useState({});

  const url = `https://api.coingecko.com/api/v3/coins/${params.coinId}`;

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setCoin(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <div className="max-w-[740px] mx-[1rem] my-auto px-[.7rem] py-[1rem] flex flex-col bg-[#26272b]  shadow-[0px 0px 12px #18191b] rounded-lg">
        <div className="max-w-[740px] mx-[1rem] my-auto px-[.7rem] py-[1rem] flex flex-col bg-[#26272b]  shadow-[0px 0px 12px #18191b] rounded-lg">
          <h1>{coin.name}</h1>
        </div>
        <div className="max-w-[740px] mx-[1rem] my-auto px-[.7rem] py-[1rem] flex flex-col bg-[#26272b]  shadow-[0px 0px 12px #18191b] rounded-lg">
          <div className="mx-[.5]">
            <span className="border-2 border-solid border-[#6900ff] bg-[#6900ff] rounded-lg p-[.2rem]">Rank # {coin.market_cap_rank}</span>
          </div>
          <div className="flex grid-cols-2">
            <div className="flex items-center mx-[1rem]">
              {coin.image ? <img src={coin.image.small} alt="" /> : null}
              <p className="pr-[1rem]">{coin.name}</p>
              {coin.symbol ? <p>{coin.symbol.toUpperCase()}/USD</p> : null}
            </div>
            <div className="flex items-center justify-center">
              {coin.market_data?.current_price ? (
                <h1>${coin.market_data.current_price.usd.toLocaleString()}</h1>
              ) : null}
            </div>
          </div>
        </div>

        <div className="max-w-[740px] mx-[1rem] my-auto px-[.7rem] py-[1rem] flex flex-col bg-[#26272b]  shadow-[0px 0px 12px #18191b] rounded-lg">
          <table className="mx-[.5rem]">
            <thead> 
              <tr>
                <th className="p-8 text-center bg-[#333]">1h</th>
                <th className="p-8 text-center bg-[#333]">24h</th>
                <th className="p-8 text-center bg-[#333]" >7d</th>
                <th className="p-8 text-center bg-[#333]">14d</th>
                <th className="p-8 text-center bg-[#333]">30d</th>
                <th className="p-8 text-center bg-[#333]"  >1yr</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-8 text-center">
                  {coin.market_data?.price_change_percentage_1h_in_currency ? (
                    <p>
                      {coin.market_data.price_change_percentage_1h_in_currency.usd.toFixed(
                        1
                      )}
                      %
                    </p>
                  ) : null}
                </td>
                <td className="p-8 text-center">
                  {coin.market_data?.price_change_percentage_24h_in_currency ? (
                    <p>
                      {coin.market_data.price_change_percentage_24h_in_currency.usd.toFixed(
                        1
                      )}
                      %
                    </p>
                  ) : null}
                </td>
                <td className="p-8 text-center">
                  {coin.market_data?.price_change_percentage_24h_in_currency ? (
                    <p>
                      {coin.market_data.price_change_percentage_7d_in_currency.usd.toFixed(
                        1
                      )}
                      %
                    </p>
                  ) : null}
                </td>
                <td className="p-8 text-center">
                  {coin.market_data?.price_change_percentage_24h_in_currency ? (
                    <p>
                      {coin.market_data.price_change_percentage_14d_in_currency.usd.toFixed(
                        1
                      )}
                      %
                    </p>
                  ) : null}
                </td>
                <td className="p-8 text-center">
                  {coin.market_data?.price_change_percentage_24h_in_currency ? (
                    <p>
                      {coin.market_data.price_change_percentage_30d_in_currency.usd.toFixed(
                        1
                      )}
                      %
                    </p>
                  ) : null}
                </td>
                <td className="p-8 text-center">
                  {coin.market_data?.price_change_percentage_24h_in_currency ? (
                    <p>
                      {coin.market_data.price_change_percentage_1y_in_currency.usd.toFixed(
                        1
                      )}
                      %
                    </p>
                  ) : null}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="max-w-[740px] mx-[1rem] my-auto px-[.7rem] py-[1rem] flex flex-col bg-[#26272b]  shadow-[0px 0px 12px #18191b] rounded-lg">
          <div className="grid grid-cols-2 gap-[2rem] w-[100%]">
            <div className="left">
              <div className="flex justify-between border-b-2 border-solid border-[#808080] mx-[.6rem] pb-[.5rem]">
                <h4>24 Hour Low</h4>
                {coin.market_data?.low_24h ? (
                  <p className="text-[#d3d3d3]">${coin.market_data.low_24h.usd.toLocaleString()}</p>
                ) : null}f
              </div>
              <div className="flex justify-between border-b-2 border-solid border-[#808080] mx-[.6rem] pb-[.5rem]">
                <h4 >24 Hour High</h4>
                {coin.market_data?.high_24h ? (
                  <p className="text-[#d3d3d3]">${coin.market_data.high_24h.usd.toLocaleString()}</p>
                ) : null}{" "}
              </div>
            </div>
            <div className="right">
              <div className="flex justify-between border-b-2 border-solid border-[#808080] mx-[.6rem] pb-[.5rem]">
                <h4>Market Cap</h4>
                {coin.market_data?.market_cap ? (
                  <p className="text-[#d3d3d3]">${coin.market_data.market_cap.usd.toLocaleString()}</p>
                ) : null}
              </div>
              <div className="flex justify-between border-b-2 border-solid border-[#808080] mx-[.6rem] pb-[.5rem]">
                <h4>Circulating Supply</h4>
                {coin.market_data ? (
                  <p className="text-[#d3d3d3]">{coin.market_data.circulating_supply}</p>
                ) : null}
              </div>
            </div>
          </div>
        </div>

        <div className="content">
          <div className="mx-[1rem]">
            <h3 className="mx-[1rem]">About</h3>
            <p
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(
                  coin.description ? coin.description.en : ""
                ),
              }}
            ></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coin;
