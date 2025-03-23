import React from 'react';
import Container from './common/container';
import Row from './common/row';

const Footer = () => {
    return ( <Container className='bg-black h-[52px] py-[14px]'>
        <Row className='text-white justify-between h-full items-center'>
        <p>© 2025 blackNwhite Inc</p>
        <img className='w-[283px]' src="/imgs/cards.png" alt="" />
        <p>Scroll to Top</p>
        </Row>
    </Container> );
}
 
export default Footer;