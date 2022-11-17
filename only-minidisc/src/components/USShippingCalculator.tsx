import React, { ChangeEvent } from 'react';
import { css } from '@emotion/react';
import { useState } from 'react';

// Configuration
const defaultExchangeRate = 38;
const defaultShippingRate = 790;
const defaultBillingRate = 0.08;
const minBillingFee = 185;

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

export default function USCalculator() {
  const [productPrice, setProductPrice] = useState(0);
  const [productWeight, setProductWeight] = useState(0)

  const [billingRate, setBillingRate] = useState(defaultBillingRate);
  const [shippingRate, setShippingRate] = useState(defaultShippingRate);
  const [exchangeRate, setExchangeRate] = useState(defaultExchangeRate)

  const handleProductPriceChanged = (e: ChangeEvent<HTMLInputElement>) =>
    setNumberValue(e.target.value, numberValue => setProductPrice(numberValue));

  const handleShippingRateChanged = (e: ChangeEvent<HTMLInputElement>) =>
    setNumberValue(e.target.value, numberValue => setShippingRate(numberValue));

  const handleProductWeightChanged = (e: ChangeEvent<HTMLInputElement>) =>
    setNumberValue(e.target.value, numberValue => setProductWeight(numberValue));

  const handleBillingFeeChanged = (e: ChangeEvent<HTMLInputElement>) =>
    setNumberValue(
      e.target.value,
      numberValue => {
        // If a new value is 0, set it to default value.
        if (numberValue == 0) {
          setBillingRate(defaultBillingRate);
        } else {
          setBillingRate(numberValue);
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

  const billingFree = (productPrice * exchangeRate) * billingRate
  const shippingCost = productWeight * shippingRate;
  const totalCost = (billingFree > minBillingFee ? billingFree : minBillingFee) + shippingCost

  return (
    <form css={style}>
      <div css={fieldContainer}>
        <label htmlFor='productPrice'>* Total product price including TAX in USD</label>
        <input
          type='text'
          id='productPrice'
          spellCheck='false'
          placeholder='Total product price including TAX in USD'
          onChange={handleProductPriceChanged}
        />
        <span className='hint'>Get total product price from a checkout page</span>
      </div>
      <div css={fieldContainer}>
        <label htmlFor='billingFee'>Billing fee</label>
        <input
          type='text'
          id='billingFee'
          spellCheck='false'
          placeholder={`Default to "${defaultBillingRate}"`}
          onChange={handleBillingFeeChanged} />
        <span className='hint'>Billing fee is what we pay a provider who delivers an item from USA to Thailand</span>
      </div>
      <div css={fieldContainer}>
        {/* We must think as how many THB for 1 dollar */}
        <label htmlFor='exchangeRate'>Exchange rate (THB to 1 USD), THB/USD</label>
        <input
          type='text'
          id='exchangeRate'
          spellCheck='false'
          placeholder={`Default to "${defaultExchangeRate}" THB/USD`}
          onChange={handleExchangeRateChanged}
        />
      </div>
      <div css={fieldContainer}>
        <label htmlFor='shippingRate'>Shipping rate for 1 KG</label>
        <input
          type='text'
          id='shippingRate'
          spellCheck='false'
          placeholder={`Default to "${defaultShippingRate}" THB per 1 KG `}
          onChange={handleShippingRateChanged} />
        <span className='hint'>Actual, not shifting the price and it is for 1 - 30 KG.</span>
      </div>

      <div css={fieldContainer}>
        <label htmlFor='productWeight'>Product weight</label>
        <input
          type='text'
          id='productWeight'
          spellCheck='false'
          placeholder={`Product weight in KG unit`}
          onChange={handleProductWeightChanged} />
      </div>

      <div css={totalPrice}>
        Total shipping cost: ({numberFormat.format(productPrice)} * {numberFormat.format(exchangeRate)} * {numberFormat.format(billingRate)}) +
        ({numberFormat.format(productWeight)} * {numberFormat.format(shippingRate)})
        = {numberFormat.format(totalCost)}
      </div>
      <p>
        Minimum Billing free is {minBillingFee} THB
      </p>
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
