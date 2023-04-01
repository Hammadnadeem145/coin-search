import React from "react";
import { FaCoins } from "react-icons/fa";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
    <Link path='/'>
      <div className="flex justify-center items-center">
        <FaCoins className="font-2rem text-[#6900ff]" />
        <h1>
          Coin <span className="text-[#6900ff]">Search</span>
        </h1>
      </div>
      </Link>
    </>
  );
}
