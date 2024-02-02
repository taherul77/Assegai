import React from 'react';
import MenuButton from './MenuButton';
import Link from 'next/link';

const MenuItem = () => {
    return (
        <div className=' flex gap-5'>
            <Link href="/AllProduct"> <MenuButton title="ALL"></MenuButton></Link>
            <Link href="/Men"> <MenuButton title="MEN"></MenuButton></Link>
            <Link href="/Women"> <MenuButton title="WOMEN"></MenuButton></Link>
          
          
       
           <MenuButton title="KIDS"></MenuButton>
       
        </div>
    );
};

export default MenuItem;