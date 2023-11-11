import '@/styles/globals.css'
import Context from '@/context/Context'
import { useState } from 'react';


export default function App({ Component, pageProps }) {
  const [cart,setCart]=useState([]);
  const [warning,setWarning]=useState(false)
  return <Context.Provider value={{cart,setCart,warning,setWarning}} >
    <Component {...pageProps} />
  </Context.Provider>
}
