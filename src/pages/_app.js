 import '@/styles/globals.css'
import React from 'react'
import Link from "next/link";



export default function App({ Component, pageProps }) {
  return <Link> <Component {...pageProps} /> </Link>
}
