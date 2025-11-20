import React from 'react'
import useFetch from './useFetch'

const CryptoPrice = () => {
const { data, loading, error } = useFetch(
    "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd,inr,eur"
  );  
  if(loading){
    return <h2>Loading.......</h2>
  }

  if(error){
    return <h2>Error: {error}</h2>
  }

  return (
    <div>
      <h1>CryptoPrice</h1>
      <h2>Bitcoin Live Price </h2>
      <ul>
        <li>USD: {data.bitcoin.usd}</li>
        <li>INR: {data.bitcoin.inr}</li>
        <li>EUR: {data.bitcoin.eur}</li>
      </ul>
    </div>

  )
}

export default CryptoPrice