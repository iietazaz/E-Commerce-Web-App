import React from "react";
import Row from "../common/row";
import Button from "../common/Button";

const HeroSection = () => {
  return (
    <div className="w-full px-[10%] py-[90px]">
      <Row className="w-full items-center justify-between">
        <div className="w-[46%]">
          <h1 className="text-[74px] text-slate-950 font-light">Collections</h1>
          <p className="text-[20px] text-black mt-[52px]">
            You can explore and shop many products from different collections
            from various brand here
          </p>
          <Button className=" w-[100px] mt-[20px]"/>
        </div>
        <div className="w-[46%]">
          <div className="w-[424px] h-[542px] relative">
            <img
              className="animate-[wobble_10s_ease-in-out_infinite] w-full h-full rounded-tl-[160px] rounded-br-[160px]"
              src="https://img.freepik.com/premium-photo/effortless-shopping-online-store-smartphone-with-shopping-cart-image_954894-61195.jpg?w=740"
              alt=""
            />
            <div className="absolute w-full h-full rounded-tl-[160px] rounded-br-[160px] border-[2px] border-[#0000040] top-[20px] left-[18px] -z-[1]" />
          </div>
        </div>
      </Row>
    </div>
  );
};

export default HeroSection;
