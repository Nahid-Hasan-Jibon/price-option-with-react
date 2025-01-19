import React from 'react';
import PriceOPtion from '../PriceOption/PriceOPtion';

const PriceOptions = () => {


    const priceOptions = [
        {
            "id": 1,
            "name": "Basic Membership",
            "features": [
                "Access to gym facilities",
                "Standard workout equipment",
                "Limited gym hours",
                "Access to locker room"
            ],
            "price": 30.00
        },
        {
            "id": 2,
            "name": "Premium Membership",
            "features": [
                "Access to gym facilities",
                "Full range of workout equipment",
                "Extended gym hours",
                "Group fitness classes",
                "Access to locker room"
            ],
            "price": 50.00
        },
        {
            "id": 3,
            "name": "Platinum Membership",
            "features": [
                "Access to gym facilities",
                "Full range of workout equipment",
                "24/7 gym access",
                "Personal training sessions",
                "Access to sauna and spa",
                "Access to locker room",
                "Towel service"
            ],
            "price": 80.00
        }
    ];

    return (
        <div>
            <h2 className='text-5xl'>Best Prices in the town</h2>
            <div className='grid grid-cols-3 gap-4 m-12'>
            {
               priceOptions.map(option=><PriceOPtion key={option.id} option={option}></PriceOPtion>) 
            }
            </div>
        </div>
    );
};

export default PriceOptions;