import React from 'react';
import { Logo } from '../Logo/Logo';

const Header = () => {
    return (
        <header className="sticky top-0 z-20 bg-neutral-100/50 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-3 sm:px-8">
            <div className="flex h-16 justify-between gap-4 md:gap-8">
                <Logo />
                {/* <Nav channel={channel} /> */}
            </div>
        </div>
    </header>
    );
};

export default Header;