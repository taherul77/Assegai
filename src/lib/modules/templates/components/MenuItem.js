import React from 'react';
import MenuButton from './MenuButton';

const MenuItem = () => {
    return (
        <div className=' flex gap-5'>
           <MenuButton title="ALL"></MenuButton>
           <MenuButton title="MEN"></MenuButton>
           <MenuButton title="WOMEN"></MenuButton>
           <MenuButton title="KIDS"></MenuButton>
       
        </div>
    );
};

export default MenuItem;