import React from "react";
import Row from "../common/row";
import Container from "../common/container";
import { Link } from "react-router-dom";

const PopularProducts = () => {

  return (
    <Container>
      <Row className="justify-center my-[20px] uppercase">
        <h1 className="text-[30px] font-semibold text-slate-950">
          Popular Products
        </h1>
      </Row>
      <Row className="gap-[24px]">
        <div className="h-[648px] w-[52px] relative">
          <p className="text-[34px] h-full w-[648px] text-black -rotate-90 absolute text-center -z-[1]">
            Explore new and Popular styles
          </p>
        </div>
        <Link to="/productdetails">
          <img
            className="w-[548px] h-[648px] cursor-pointer object-contain"
            src="https://aldo.com.sa/cdn/shop/collections/s22_q1_w_vday_accessories_cluster_4467-547936.jpg?v=1644355846"
            alt=""
          />
        </Link>
        <Row className="flex-wrap  w-1/2 gap-[24px]">
          {/* {[...new Array(4)].map((_, idx) => ( */}
            <Link to="/productdetails" className="w-[46%] h-[312px]">
              <img
                className="w-[312px] h-full object-contain"
                src="https://blog-cdn.el.olx.com.pk/wp-content/uploads/2022/05/19162748/lady-bag.jpg"
                alt=""
              />
            </Link>
            <Link to="/productdetails" className="w-[46%] h-[312px]">
              <img
                className="w-[312px] h-full object-contain"
                src="https://cdn.shopify.com/s/files/1/0792/1280/6444/files/3_27261057-9999-466e-a40f-22b28e7b3ab5.jpg?v=1701432184"
                alt=""
              />
            </Link>
            <Link to="/productdetails" className="w-[46%] h-[312px]">
              <img
                className="w-[312px] h-full object-contain"
                src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto:best,fl_lossy/if_w_gt_800,w_800/shoes_men_tcc_d_44a809233a.jpg"
                alt=""
              />
            </Link>
            <Link to="/productdetails" className="w-[46%] h-[312px]">
              <img
                className="w-[312px] h-full object-contain"
                src="https://www.sclothers.com/cdn/shop/products/1op.jpg?v=1655918110&width=1080"
                alt=""
              />
            </Link>
          {/* ))} */}
        </Row>
      </Row>
    </Container>
  );
};

export default PopularProducts;
