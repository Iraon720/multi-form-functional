// import Arcade from './images/icon-arcade.svg'
// import Advanced from './images/icon-advanced.svg';
// import Pro from './images/icon-pro.svg';
// import Switch from 'react-switch';
import { useState, useContext } from "react";
import { Context } from '../../Context';
import options from '../../Options';
import Switch from 'react-switch';

const activeStyles = {
  color: '#022959',
  backgroundColor: 'hsl(217, 100%, 97%)',
};
const defaultStyles = { color: '', backgroundColor: 'white' };


function Step2() {
const {userInfo, setUserInfo} = useContext(Context)
const {isMonthly} = userInfo
const {plans, addons} = options

  const planSelection = (e) => {
    const plan = plans.filter(plan => plan.name === e.target.value)
    const userPlanPrice = isMonthly ? userPlanPrice[0].monthlyPrice : userPlanPrice[0].yearlyPrice;
  }

  setUserInfo(prev =>(
    {
      ...prev,
      plan:{
        planType: e.target.value,
        planPrice: userPlanPrice
       }}))
  


  return (
  
      <div id='step2Container'>
        <h1 className='header'>Select your plan</h1>
        <p className='subheader'>
          You have the option of monthly or yearly billing.
        </p>
      
<div className='plan-container'>
        {planSelection.map((plan, i) => {
          return (
            <div
              className='.Opts'
              key={i}
              id='arcade'
              onClick={() => {
                this.props.handleTotal();
                this.props.changePlan(plan);
                 
              }}
              style={
                this.props.selectedPlan === plan ? activeStyles : defaultStyles
              }
            >
              <p>{plan.plan}</p>
              <div className='type-of-billing'>
                <p>
                  {this.props.billingType === 'Monthly'
                    ? plan.monthly
                    : plan.yearly + '2 months free'}
                </p>
              </div>
            </div>
          );
        })}

      

        <div className='toggle-btn' style={{ display: 'flex', flexDirection: 'row',justifyContent:'space-evenly' }}>
          <div>Monthly</div>
          <Switch
            onChange={() => this.props.changeBillingType()}
            uncheckedIcon={false}
            checkedIcon={false}
            onColor='#02295a'
            offColor='#02295a'
            checked={this.props.billingType === 'Yearly'}
          />
          <div>Yearly</div>
        </div>
</div>
      </div>
    );
      }


export default Step2;
