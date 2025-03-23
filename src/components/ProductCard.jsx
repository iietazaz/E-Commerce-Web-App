import React from "react";
import Row from "./common/row";
import { Link } from "react-router-dom";

const ProductCard = () => {
  return (
    <Link to='/productdetails' className="w-full shadow pb-[5px]">
      <img className="w-full object-cover h-[400px] " src="https://www.sclothers.com/cdn/shop/products/1op.jpg?v=1655918110&width=1080" alt="" />
      <Row className="px-[10px]">
        <h6 className="text-black text-[16px] font-semibold mt-[18px]">
          Demo Title
        </h6>
      </Row>
      <Row className='justify-between mt-[16px] px-[10px] mb-[10px] '>
        <p className="text-[16px] text-slate-500 ">Clothing</p>
        <p className="text-[16px] text-slate-500 font-semibold">$20</p>
      </Row>
    </Link>
  );
};

export default ProductCard;
