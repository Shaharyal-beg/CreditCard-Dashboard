import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './component.css'
import Cards from './Cards'
import Currency from './Currency'
import { CChart } from '@coreui/react-chartjs';
import foodPanda from '../images/unnamed.png'
import amazon from '../images/amazon.png'
import careem from '../images/careem.png'
import starbucks from '../images/starbucks.png'
import apple from '../images/apple.png'
import creditcard from '../images/credit card.png'
import man from '../images/man1.png'
import SwapHorizRoundedIcon from '@mui/icons-material/SwapHorizRounded';
import ChangeCircleRoundedIcon from '@mui/icons-material/ChangeCircleRounded';
import MCicon from '../images/Mastercard_logo.jpg'
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import crypto from '../images/crypto.png'
import falah from '../images/falah.png'
import nft from '../images/nft.avif'
import stocks from '../images/stocks.png'
import Divider from './Divider'
import Investments from './Investments'


const Page = (props) => {
  const [amount1, setAmount1] = useState(1);
  const [amount2, setAmount2] = useState(1);
  const [currency1, setCurrency1] = useState('usd');
  const [currency2, setCurrency2] = useState('usd');
  const [rates, setRates] = useState([]);

  useEffect(() => {
    axios.get('https://api.apilayer.com/fixer/latest?base=USD&apikey=8El09v1tgPaDSKNR0TGCUrzqXBE6AdDI')
      .then(response => {
        setRates(response.data.rates);
      })
  }, []);
  useEffect(() => {
    if (!!rates) {
      function init() {
        handleAmount1Change(1);
      }
      init();
    }
  }, [rates]);
  function format(number) {
    return number.toFixed(4);
  }

  function handleAmount1Change(amount1) {
    setAmount2(format(amount1 * rates[currency2] / rates[currency1]));
    setAmount1(amount1);
  }

  function handleCurrency1Change(currency1) {
    setAmount2(format(amount1 * rates[currency2] / rates[currency1]));
    setCurrency1(currency1);
  }

  function handleAmount2Change(amount2) {
    setAmount1(format(amount2 * rates[currency1] / rates[currency2]));
    setAmount2(amount2);
  }

  function handleCurrency2Change(currency2) {
    setAmount1(format(amount2 * rates[currency1] / rates[currency2]));
    setCurrency2(currency2);
  }

const data = [
  {

    image: apple,
    text: "APPLE",
    amount: "-200.00"
  },
  {
    image: careem,
    text: "CAREEM",
    amount: "-200.00"
  },
  {
    image: amazon,
    text: "AMAZON",
    amount: "-200.00"
  },
  {
    image: starbucks,
    text: "STARBUCKS",
    amount: "-200.00"
  },
  {
    image: foodPanda,
    text: "FoodPanda",
    amount: "-200.00"
  },
  {
    image: amazon,
    text: "AMAZON",
    amount: "+300.00"
  }

]
  const data2 = [
    {
      image: falah,
    text: "Bank Alfalah",
    amount: "-200.00"
    },
    {image: crypto,
      text: "Crypto Coin",
      amount: "-400.00"
    },
    {
      image: stocks,
    text: "Stocks",
    amount: "-600.00"
    },
    {
      image: nft,
    text: "NFT",
    amount: "+100.00"
    }

  ]



  return (
    <div className='page'>
      <div className='card'>
        <h2>Card List</h2>
        <img src={creditcard} />

      </div>
      <div className='advertisement'>
        <div className='ad-details'>
          <h1>CashBack Upto 66%</h1>
          <button>Active</button>

        </div>

        <img src={man} />

      </div>
      <div className='transaction-table'>
        <h3>Transaction</h3>
        <Divider width={'23vw'}/>
        <h5 style={{ color: 'grey' }}>See all</h5>
         <Cards cardsData={data}/>
      </div>
      <div className='transfer'>
        <div className='transfer-icon'><SwapHorizRoundedIcon sx={{ fontSize: '35px', color: '#29C4FD' }} /></div>
        <h3>Transfer</h3>
        <Divider />
        <div className='box-icon-footer'>
        <div className='box'><p>9876 8775 5432 0980</p> <img src={MCicon} /> </div>
        <div className='rightArrow'><ArrowForwardIosRoundedIcon sx={{ color: 'grey', fontSize: '30px',mt:'-4' }} /> </div>
        <span className="transfer-footer">visa or master card of any bank</span>
        </div>
        

      </div>
      <div className='conversion'>
        <div className='conversion-icon'><ChangeCircleRoundedIcon sx={{ fontSize: '28px', color: '#FFCC00;', backgroundColor:'black',borderRadius: '14px' }} /></div>
        <h3>Conversion</h3>
        <Divider />
         <div className='amount'>
        <h5>Amount</h5>
        <Currency
          onAmountChange={handleAmount1Change}
          onCurrencyChange={handleCurrency1Change}
          currencies={Object.keys(rates)}
          amount={amount1}
          currency={currency1} />
        <Currency
          onAmountChange={handleAmount2Change}
          onCurrencyChange={handleCurrency2Change}
          currencies={Object.keys(rates)}
          amount={amount2}
          currency={currency2} />
          </div>
      </div>
      <div className='graph'>
        <h3>Graph</h3>
        <Divider />
        <CChart
            type="line"
            data={{
              labels: ["January", "February", "March", "April", "May", "June", "July"],
              datasets: [
                {
                  label: "Earning online",
                  backgroundColor: "rgba(220, 220, 220, 0.2)",
                  borderColor: "skyblue",
                  pointBackgroundColor: "rgba(220, 220, 220, 1)",
                  pointBorderColor: "orange",
                  data: [4000, 2000, 1200, 39000, 1000, , 39000, 8000, 4000]
                },
                {
                  label: "Earning on cash",
                  backgroundColor: "rgba(151, 187, 205, 0.2)",
                  borderColor: "black",
                  pointBackgroundColor: "rgba(151, 187, 205, 1)",
                  pointBorderColor: "green",
                  data: [5000, 12000, 28000, 29000, 7000, 2500, 120, 7000, 60000]
                },
              ],
            }}
          />



      </div>
      <div className='investment'>
        <h3>Investment</h3>
        <Divider width={'23vw'}/>
        <h5 style={{ color: 'grey' }}>See all</h5>
        <Investments invest={data2}/>
      </div>

    </div>
  )
}

export default Page