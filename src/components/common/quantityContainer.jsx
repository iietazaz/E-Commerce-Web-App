import React from 'react';
import Row from './row';
import Button from './Button';

const QuantityContainer = () => {
    return ( <Row className="items-center">
        <Button title="-" className="w-[52px] h-[52px]" />
        <p className="w-[70px] text-center font-semibold text-[16px]">
          0
        </p>
        <Button title="+" className="w-[52px] h-[52px]" />
      </Row> );
}
 
export default QuantityContainer;