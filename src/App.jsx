// Imports
import { useState } from 'react'
import { InputBox } from './components/index.js'
import useCurrencyInfo from './hooks/useCurrencyInfo.js'
import './App.css'

function App() {
  // States
  const [amount, setAmount] = useState();
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");

  // Custom Hook
  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)

  // Swap Currency Logic
  const swap = () => {
    setFrom(to)
    setTo(from)
    setAmount(convertedAmount)
    setConvertedAmount(amount)
  }

  // Conversion Logic
  const convert = () => {
    const result = amount * currencyInfo[to];
    setConvertedAmount(Number(result.toFixed(2)));
  }


  return (
    <div className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat'
      style={{ backgroundImage: `url(https://images.pexels.com/photos/1629172/pexels-photo-1629172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)` }}>
      <div className='w-full'>
        <div className='w-full h-full max-w-2xl max-h-xl mx-auto border shadow-md shadow-gray-600 border-gray-600 rounded-lg p-5 backdrop-blur-sm bg-white/10'>
          <form onSubmit={(e) => {
            e.preventDefault()
            convert()
          }}>
            <div className='w-full mb-1'>
              <InputBox
                label="from"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setFrom(currency)}
                onAmountChange={(amount) => setAmount(amount)}
                selectedCurrency={from}
              />
            </div>
            <div className='relative w-full h-0.5'>
              <button
                className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 hover:bg-blue-700 cursor-pointer text-white shadow-md shadow-blue-950 rounded-lg px-2 py-0.5'
                onClick={swap}
              >Swap</button>
            </div>
            <div className='w-full mb-1'>
              <InputBox
                label="to"
                amount={convertedAmount}
                amountDisabled={true}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectedCurrency={to}
              />
            </div>
            <button
              type='submit'
              className='w-full mt-4 bg-blue-600 hover:bg-blue-700 cursor-pointer text-white px-4 py-3 shadow-md shadow-blue-950 rounded-lg'
            >Convert {from.toUpperCase()} to {to.toUpperCase()}</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
