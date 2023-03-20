
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
  const { userInfo, setUserInfo } = useContext(Context);
  const { isMonthly } = userInfo;
  const { plans, addons } = options;

  const planSelection = (e) => {
    const plan = plans.filter((plan) => plan.name === e.target.value);
    const userPlanPrice = isMonthly
      ? userPlanPrice[0].monthlyPrice
      : userPlanPrice[0].yearlyPrice;

    setUserInfo((prev) => ({
      ...prev,
      plan: {
        planType: e.target.value,
        planPrice: userPlanPrice,
      },
    }));
  };

  const plansEl = plans.map((plan) => (
    <label
      key={plan.name}
      htmlFor={plan.name}
      className={`plan ${
        plan.name === userInfo.plan.planType ? 'active-plan' : null
      }`}
    >
      <input
        type='radio'
        id={plan.name}
        className='plan--checkbox'
        name='plan'
        value={plan.name}
        checked={plan.name === userInfo.plan.planType}
        onChange={(e) => planSelection(e)}
      />
      <div className='plan--info'>
        <img src={plan.img} alt={`${plan.name} plan`} className='plan--pic' />
        <div className='plan--description'>
          <h2 className='plan--name'>{plan.name}</h2>
          {isMonthly ? (
            <p className='plan--price'>${plan.monthlyPrice}/mo</p>
          ) : (
            <p className='plan--price'>${plan.yearlyPrice}/yr</p>
          )}

          {!isMonthly && <p className='plan--sale'>2 months free</p>}
        </div>
      </div>
    </label>
  ));
  
  );
}
     


export default Step2;


//  <div id='step2Container'>
//         <h1 className='header'>Select your plan</h1>
//         <p className='subheader'>
//           You have the option of monthly or yearly billing.
//         </p>
      
 

      

//         <div className='toggle-btn' style={{ display: 'flex', flexDirection: 'row',justifyContent:'space-evenly' }}>
//           <div>Monthly</div>
//           <Switch
//             onChange={() => this.props.changeBillingType()}
//             uncheckedIcon={false}
//             checkedIcon={false}
//             onColor='#02295a'
//             offColor='#02295a'
//             checked={this.props.billingType === 'Yearly'}
//           />
//           <div>Yearly</div>
//         </div>
// </div>
     
//     );
//       }