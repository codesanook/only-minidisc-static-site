import React, { ChangeEvent } from 'react';
import { css } from '@emotion/react';
import { useState } from 'react';

// Configuration
const defaultExchangeRate = 0.32;
const defaultShippingCost = 0;
const defaultYahooAuctionFee = 100;
const defaultBillingFee = 250;

const numberFormat = new Intl.NumberFormat(
  'en-US',
  { maximumFractionDigits: 2 }
);

// https://freshdesignweb.com/css-registration-form-templates/
// https://www.begindot.com/best-css-registration-form-templates/
// https://www.bypeople.com/css-form/
// https://designsrock.org/free-css-sign-up-registration-form/

const style = css`
 * {
    box-sizing: border-box;
  }

  width: 100%;
  margin: 10px auto;
  padding: 10px;
  border: 7px solid $green-border;
  border-radius: 10px;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  color: #444;
  background-color: $back-color;
  box-shadow: 0 0 20px 0 #000000;

  h3 {
    margin: 0 15px 20px;
    border-bottom: 2px solid $green-border;
    padding: 5px 10px 5px 0;
    font-size: 1.1em;
	}

	.button {
    font-size: 1em;
    border-radius: 8px;
    padding: 10px;
    border: 1px solid #59B969;
    box-shadow: 0 1px 0 0 #60BD49 inset;
	}
`;

const fieldContainer = css`
  display: flex;
  margin: 0 0 15px 0;
  border : none;
  flex-direction: column;

  @media only screen and (min-width: 576px) {
    flex-direction: row;
    flex-wrap: wrap;
  }

  > * {
    @media only screen and (min-width: 576px) {
      width: 50%;
    }
  }

  span:nth-of-type(1) {
  //&:nth-child(3){
    // outline: 1px solid red;
    font-size: 0.9rem;
    font-style: italic;
    text-align: left;

    @media only screen and (min-width: 576px) {
      width: 100%;
      text-align: right;
    }
  }

  label {
    text-align: left;
    padding: 10px;

    @media only screen and (min-width: 576px) {
      text-align: right;
    }
  }

	input[type=text], input[type=password] {
    font-family: 'Lucida Grande','Lucida Sans Unicode',Tahoma,Sans-Serif;
    padding: 5px;
    font-size: 0.9em;
    border-radius: 5px;
    background: rgba(0, 0, 0, 0.07);
	}

  input[type=text]:focus, input[type=password]:focus {
		background: #FFFFFF;
	}
`;

const totalPrice = css`
  margin: 10px 0;
  font-weight: bold;
  text-align: center;
`;

export default function YahooActionJapanCalculator() {
  const [productPrice, setProductPrice] = useState(0);
  const [shippingCost, setShippingCost] = useState(defaultShippingCost);
  const [yahooAuctionFee, setYahooActionFee] = useState(defaultYahooAuctionFee);
  const [billingFee, setBillingFee] = useState(defaultBillingFee);
  const [exchangeRate, setExchangeRate] = useState(defaultExchangeRate)

  const handleProductPriceChanged = (e: ChangeEvent<HTMLInputElement>) =>
    setNumberValue(e.target.value, numberValue => setProductPrice(numberValue));

  const handleShippingCostChanged = (e: ChangeEvent<HTMLInputElement>) =>
    setNumberValue(e.target.value, numberValue => setShippingCost(numberValue));

  const handleYahooAuctionFeeChanged = (e: ChangeEvent<HTMLInputElement>) =>
    setNumberValue(
      e.target.value,
      numberValue => {
        // If a new value is 0, set it to default value.
        if (numberValue == 0) {
          setYahooActionFee(defaultYahooAuctionFee);
        } else {
          setYahooActionFee(numberValue);
        }
      }
    );

  const handleBillingFeeChanged = (e: ChangeEvent<HTMLInputElement>) =>
    setNumberValue(
      e.target.value,
      numberValue => {
        // If a new value is 0, set it to default value.
        if (numberValue == 0) {
          setBillingFee(defaultBillingFee);
        } else {
          setBillingFee(numberValue);
        }
      }
    );

  const handleExchangeRateChanged = (e: ChangeEvent<HTMLInputElement>) =>
    setNumberValue(
      e.target.value,
      numberValue => {
        // If a new value is 0, set it to default value.
        if (numberValue == 0) {
          setExchangeRate(defaultExchangeRate);
        } else {
          setExchangeRate(numberValue);
        }
      }
    );

  const getTotalPrice = () => (productPrice + shippingCost + yahooAuctionFee + billingFee) * exchangeRate;

  return (
    <form css={style}>
      <div css={fieldContainer}>
        <label htmlFor='productPrice'>* Product price</label>
        <input
          type='text'
          id='productPrice'
          spellCheck='false'
          placeholder='Product price (Highest bidding price)'
          onChange={handleProductPriceChanged}
        />
      </div>
      <div css={fieldContainer}>
        <label className='input' htmlFor='shippingCost'>Shipping cost</label>
        <input
          className='field'
          type='text'
          id='shippingCost'
          spellCheck='false'
          placeholder={`Optional, default to "${defaultShippingCost}"`}
          onChange={handleShippingCostChanged}
        />
        <span className='hint'>Shipping cost (In Japan only), search a value in <em>配送方法と送料</em> section</span>
      </div>
      <div css={fieldContainer}>
        <label className='label' htmlFor='yahooAuctionFee'>Yahoo auction free</label>
        <input className='input'
          type='text'
          id='yahooAuctionFree'
          spellCheck='false'
          placeholder={'Optional, default to "100" Yen'}
          onChange={handleYahooAuctionFeeChanged} />
      </div>
      <div css={fieldContainer}>
        <label htmlFor='billingFee'>Billing free</label>
        <input
          type='text'
          id='billingFee'
          spellCheck='false'
          placeholder={'Optional, default to "250" Yen'}
          onChange={handleBillingFeeChanged} />
        <span className='hint'>Billing fee from a provider who deliveries an item from Japan to Thailand</span>
      </div>
      <div css={fieldContainer}>
        <label htmlFor='exchangeRate'>Exchange rate (1 YEN to THB)</label>
        <input
          type='text'
          id='exchangeRate'
          spellCheck='false'
          placeholder={`Optional, default to "${defaultExchangeRate}" Yen/THB`}
          onChange={handleExchangeRateChanged}
        />
      </div>
      <div css={totalPrice}>
        Total price: (
        {numberFormat.format(productPrice)}+
        {numberFormat.format(shippingCost)}+
        {numberFormat.format(yahooAuctionFee)}+
        {numberFormat.format(billingFee)}
        )x
        {numberFormat.format(exchangeRate)} = {numberFormat.format(getTotalPrice())}
      </div>
    </form>
  );
}

function setNumberValue(inputValue: string, setValueState: (numberValue: number) => void) {
  const pattern = /[^0-9\.]/g;

  const numberValue = Number(inputValue.replace(pattern, ''));
  if (!isNaN(numberValue)) {
    setValueState(numberValue)
  }
}
