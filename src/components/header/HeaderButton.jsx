import React from "react";
import Row from "../common/row";
import { Link } from "react-router-dom";

const HeaderButton = (props) => {
    const {title, Icon, url='/'} = props;
  return (
    <Link to={url}>
    <Row className='mx-[5px]'>
      <Icon/>
      <p className="text-[#1e2832] hover:text-slate-400 ml-[2px] text-[18px]">
        {title}
      </p>
    </Row>
    </Link>
  );
};

export default HeaderButton;
