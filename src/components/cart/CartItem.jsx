import React from 'react';
import Row from '../common/row';
import QuantityContainer from '../common/quantityContainer';

const CartItem = () => {
    return ( <Row className="items-center py-[10px] px-[5px] w-full border-[1px] border-gray-400 rounded mb-[30px]">
            <Row className="w-[20%] mt-[1%]">
              <img className="w-2/3 h-[150px] object-contain"
                src="https://www.sclothers.com/cdn/shop/products/1op.jpg?v=1655918110&width=1080"
                alt=""
              />
            </Row>
            <p className="w-[20%] text-[16px] text-black font-medium">
              Demo Product
            </p>
            <p className="w-[15%] text-[16px] pl-3 text-black font-medium">
              $20
            </p>
            <Row className=" justify-center">
                <QuantityContainer/>
            </Row>
            <p className="w-[20%] text-[16px] pl-18 text-black font-medium">
              $1040
            </p>
          </Row> );
}
 
export default CartItem;