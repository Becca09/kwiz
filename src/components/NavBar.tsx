import React from 'react';
import Link from 'next/link'; 
import { Logo } from './Logo';
import { Heading } from './Heading';

const NavBar = () => {
    return (
        <div className='border-b border-white container pb-2 cursor-pointer flex flex-row justify-between'>
          
            <Link href="/">
                    <Logo src='/assets/images/logo.svg' />
            </Link>

            <Link href="/topics">
                <Heading level = {4} className='mt-5'>Topics</Heading>
            </Link>
        </div>
    );
};

export default NavBar;
