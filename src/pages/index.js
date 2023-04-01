import Navbar from "@/components/Navbar";
import Link from "next/link";
import axios from 'axios'
import React, { useEffect, useState } from "react";
import Coins from "../components/Coins";
import Coin from "../routes/Coin";

export default function Home() {
  const [coins, setCoins] = useState([]);

  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false";

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setCoins(response.data);
        // console.log(response.data[0])
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <Navbar />
      <Link>
        <Link path="/" element={<Coins coins={coins} />} />
        <Link path="/coin" element={<Coin />}>
          <Link path=":coinId" element={<Coin />} />
        </Link>
      </Link>
    </>
  );
}
