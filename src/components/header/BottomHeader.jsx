import React from 'react';
import Row from '../common/row';

const menus = [
    "Jewelry & Accessories",
    "Clothins & Shoes",
    "Home & Living",
    "Wedding & Party",
    "Toys & Entertainment",
    "Art & Collectibles",
    "Craft Supplies & Tools",
  ];

const BottomHeader = () => {
    return ( <div className="w-full px-[10%] h-[60px] bg-[#252c340d]">
        <Row className="flex items-center h-full justify-between">
          {menus.map((item) => (
            <p className="text-[14px] text-slate-900" key={item}>{item}</p>
          ))}
        </Row>
      </div> );
}
 
export default BottomHeader;