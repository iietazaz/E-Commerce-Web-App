import React from 'react';
import Row from '../common/row';
import HeaderButton from '../header/HeaderButton'
import SearchIcon from '../../svgs/SearchIcon';
import RotatedSquare from '../../svgs/RotatedSquare';
import UserIcon from '../../svgs/UserIcon';
import BucketIcon from '../../svgs/BucketIcon';
import { Link } from 'react-router-dom';

const TopHeader = () => {
    return ( <div className="w-full px-[10%] h-full">
        <Row className="flex items-center h-full justify-between">
            <SearchIcon />
          <Row className="flex items-center">
            <RotatedSquare />
            <Link to='/'>
            <h1 className="text-[28px] text-black mx-[10px]">blackNwhite Inc</h1>
            </Link>
            <RotatedSquare />
          </Row>
          <Row>
            <HeaderButton title="User" Icon={UserIcon} />
            <HeaderButton title="Cart" Icon={BucketIcon} url='/cart'/>
          </Row>
        </Row>
      </div> );
}
 
export default TopHeader;