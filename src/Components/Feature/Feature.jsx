import React from 'react';
import { IoCheckmarkCircleSharp } from "react-icons/io5";

const Feature = ({feature}) => {
    return (
        <div className=' flex items-center gap-1'>
            <IoCheckmarkCircleSharp />
            {feature}
        </div>
    );
};

export default Feature;