import React from 'react';

const Button = ({className='h-[40px] w-[30%] mt-[50px]', title='Shop Now'}) => {
    return ( <button className={`cursor-pointer bg-black text-white text-[20px] rounded ${className}`}>
        {title}
      </button> );
}
 
export default Button;