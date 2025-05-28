import {useId} from 'react'

function InputBox({
    label, 
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectedCurrency = "{usd}",
    amountDisabled = false,
    currencyDisabled = false,
    className = ""

}) {
    const id = useId()
  return (
    <div className={`bg-white p-3 gap-2 rounded-lg text-sm flex ${className}`}>
        <div className='w-1/2'>
            <label htmlFor = {id}  className='text-black/80 mb-2 inline-block'> {label} </label>
            <input
            id={id}
            type='number'
            min="0"
            step="any"
            className='outline-none w-full rounded-lg m-1 p-2 border-1 border-gray-500 bg-gray-300 '
            placeholder='Amount'
            disabled={amountDisabled}
            value={amount}
            onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
            />
        </div>
        <div className='w-1/2 flex flex-wrap justify-end text-right'>
            <p className='text-black/80 mb-2 w-full'> Currency Type</p>
            <select className='rounded-lg px-1 p-2 m-1 w-full bg-gray-300 cursor-pointer border-1 border-gray-500 outline-none'
            value={selectedCurrency}
            onChange = {(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
            disabled={currencyDisabled}
            >
                {currencyOptions.map((currency) => (
                    <option key={currency} value={currency}> {currency} </option>
                ))}
            </select>
        </div>
    </div>
  )
}

export default InputBox