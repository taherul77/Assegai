import React from 'react';

const MenuButton = (btn) => {
    const title=btn.title
    
    return (
        <div>
            <button className="  inline-flex items-center rounded-md py-2 px-3 text-sm font-medium">{title}</button>
        </div>
    );
};

export default MenuButton;