import React from "react";
import Row from "../components/common/row";
import Container from "../components/common/container";
import Button from "../components/common/Button";
import Layout from "../components/common/layout";
import { Link } from "react-router-dom";
import QuantityContainer from "../components/common/quantityContainer";

const ProductDetails = () => {
  return (
    <Layout>
      <Container className="my-[40px]">
        <Row className="justify-between">
          <Row className="w-[47%]">
            <img
              src="https://www.sclothers.com/cdn/shop/products/1op.jpg?v=1655918110&width=1080"
              className="w-full object-contain h-[80vh]"
              alt="Product"
            />
          </Row>
          <Row className="flex-col w-[47%]">
            <h1 className="text-[30px] text-slate-700 font-semibold mb-[50px]">
              Clothing | Demo Product
            </h1>
            <Row className="gap-[20px] mb-[10px] w-[15%]">
              <p className="text-[18px] text-black font-medium">Price</p>
              <p className="text-[18px] text-black">$20</p>
            </Row>
            <Row className="gap-[20px] mb-[10px] w-[15%]">
              <p className="text-[18px] text-black font-medium">Rating</p>
              <p className="text-[18px] text-black">3/5</p>
            </Row>
            <Row className="gap-[20px] mb-[10px] w-[15%]">
              <p className="text-[18px] text-black font-medium">Catogary</p>
              <p className="text-[18px] text-black">Clothing</p>
            </Row>
            <Row className="gap-[20px] ">
              <p className="text-[18px] text-black font-medium">Description</p>
              <p className="text-[18px] text-black">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                rem error facere voluptas voluptatibus soluta, quas ipsam
                debitis explicabo magni, laboriosam necessitatibus, architecto
                voluptates. Suscipit facere ipsum tempore aspernatur non.
              </p>
            </Row>
            <div className="w-full mt-[40px]">
              <QuantityContainer/>
            </div>
            <Link to="/cart">
              <Button
                title="Add to Cart"
                className="h-[52px] w-[174px] mt-[20px]"
              />
            </Link>
          </Row>
        </Row>
      </Container>
    </Layout>
  );
};

export default ProductDetails;
