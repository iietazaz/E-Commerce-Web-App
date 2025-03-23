import React from "react";
import Layout from "../components/common/layout";
import Container from "../components/common/container";
import Row from "../components/common/row";
import CartItem from "../components/cart/CartItem";

const Cart = () => {
    

  return (
    <Layout>
      <Container className="my-[40px]">
        <Row className="mb-[30px] justify-center">
          <h6 className="text-[24px] font-semibold text-slate-700">
            Cart Details
          </h6>
        </Row>
        <Row className="flex-col mb-[30px]">
          <Row className="h-[40px] bg-gray-400 w-full items-center px-[20px]">
            <h6 className="text-white text-[18px] pl-8 font-medium w-[20%]">
              Image
            </h6>
            <h6 className="text-white text-[18px] pl-5 font-medium w-[20%]">
              Title
            </h6>
            <h6 className="text-white text-[18px] font-medium w-[20%]">
              Price
            </h6>
            <h6 className="text-white text-[18px] font-medium w-[20%]">
              Quantity
            </h6>
            <h6 className="text-white text-[18px] font-medium w-[20%]">
              Total
            </h6>
          </Row>
          <CartItem/>
          <CartItem/>
          <CartItem/>
          <CartItem/>
        </Row>
      </Container>
    </Layout>
  );
};

export default Cart;
