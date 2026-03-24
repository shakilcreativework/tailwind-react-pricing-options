import React, { use } from 'react';
import PricingCard from '../PricingCard/PricingCard';

const PricingOptions = ({pricingPromise}) => {
    const pricingData = use(pricingPromise);
    // console.log(pricingData);

    return (
        <div>
            <h2 className='text-5xl text-center'>Get our Membership</h2>
            <div>
                {
                    pricingData.map(pricing => <PricingCard key={pricing.id} pricing={pricing} />)
                }
            </div>
        </div>
    );
};

export default PricingOptions;