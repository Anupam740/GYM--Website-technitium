import React from 'react'
import "./Pricing.css"
import {TiTickOutline} from 'react-icons/ti'
import {BsArrowRight} from 'react-icons/bs'

function Pricing() {
  return (
    <div name="pricing" className='pricing'>
      <div className='membership-card'>
        <div className='membercard1'>
          <h3>Day Pass</h3>
          <span><sup>$</sup> 20</span>
          <h3>/ pass</h3>
          <div className='membercard1-content'>
            <h4><TiTickOutline/> 1 Day Pass</h4>
            <h4><TiTickOutline/> Free Gym Access</h4>
            <h4><TiTickOutline/> 24 Hour Access</h4>
          </div>
          <button className="masterCard1-button">Get Started</button>
        </div>
        <div className='memberCard2'>
        <h3>Month to Month</h3>
        <span><sup>$</sup> 90</span>
          <h3>/ month</h3>
          <div className='memberCard2-content'>
            <h4><TiTickOutline/> $99 Joing Fee</h4>
            <h4><TiTickOutline/> No Contract</h4>
            <h4><TiTickOutline/> Free Gym Access</h4>
            <h4><TiTickOutline/> 1 Group Class Included</h4>
            <h4><TiTickOutline/> 24 Hour Access</h4>
          </div>
          <button className="masterCard-button">Get Started</button>
        </div>
      </div>
      <div className="membership-cardright-part">
        <h4>Membership</h4>
        <h1>From Punch Pass to Monthly or Annual </h1>
        <p>At Gym base, we offer a wide range of membership with options to suit every budget. Everything from one day pass. Punch pass to monthly or anual prepaid memberships. Whats's more. We won't tie you in to a long term contract. Giving you greater frexibility</p><br />
        <h3>Each plan included</h3>
        <p><BsArrowRight/> The best equipments global brands.</p>
        <p><BsArrowRight/> The Gym is open 24 hours a day. 7 day a week.</p>
        <p><BsArrowRight/> Two safe payment methods.</p>
        <p><BsArrowRight/> Group fitness classes in the price of the subscription.</p>
        <p><BsArrowRight/> No, long-term contract,period.</p>



      </div>
    </div>
  )
}

export default Pricing
