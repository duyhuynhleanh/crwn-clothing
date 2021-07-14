import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import checkoutImage from '../../assets/crown.svg'

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100
  const publishableKey =
    'pk_test_51JCwyoCx9J62zdJ4BoF4yExvkbr7PCGNASN8DdcvJs0ZL9zAEeKjl4HtLj4hl1GqTDaH9PdTOptLpD4OhiPenu6E00Mzg8kq09'
  const onToken = (token) => {
    console.log(token)
    alert('Payment Successful')
  }
  return (
    <StripeCheckout
      label='Pay Now'
      name='Crwn Clothing Ltd.'
      billingAddress
      shippingAddress
      image={checkoutImage}
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

export default StripeCheckoutButton
