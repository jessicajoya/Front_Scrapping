import { useState } from 'react';
import './App.css';

import { Quote } from './interfaces/QuotesInterface';

import CardQuotes from './components/CardQuotes';

import { render } from "react-dom"
import React from 'react';

interface AppProps {
  title: string
}

export function App({ title }: AppProps) {
  const [quotes, setQuotes] = React.useState([])

  React.useEffect(()=>{
    getValues()
  },[])
  // const [quotes, setQuotes] = useState<Quote[]>([
  //   {
  //     buy_price: 140.3,
  //     sell_price: 144,
  //     source: "https://www.ambito.com/contenidos/dolar.html"
  //   },
  //   {
  //     buy_price: 111.3,
  //     sell_price: 224,
  //     source: "https://aaaaaaa/dolar.html"
  //   },
  //   {
  //     buy_price: 3,
  //     sell_price: 3,
  //     source: "https:/3/dolar.html"
  //   },

  // ]
  
  // )

const getValues = async () =>{
  const data =  await fetch('/quotes')
  const DataQuotes = await data.json()
  setQuotes(DataQuotes)

  
//   })
//  const data =  fetch('/quotes',{ method: 'GET',
//   })
//   .then(response => response.json())
//   .then(data => console.log(data));
}


 
  
// console.log(data)
  
  return (
    <div >
      <div className="bg-dark text-white" > 
      <h1>{title}</h1>
      </div>
      <main>
        <CardQuotes quotes={quotes} />
      </main>
    </div>

  );
}

