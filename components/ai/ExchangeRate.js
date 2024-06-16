import React, { useState, useEffect } from 'eact';
import axios from 'axios';

const ExchangeRate = () => {
  const [exchangeRate, setExchangeRate] = useState(0);

  useEffect(() => {
    axios.get('https://api.pi.network/exchange-rate')
    .then(response => {
       setExchangeRate(response.data.rate);
      })
   .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <p>Current exchange rate: {exchangeRate} Pi/USD</p>
  );
};

export default ExchangeRate;
