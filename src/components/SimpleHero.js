import React from 'react';

function SimpleHero({children}) {
    return (
        <header className='defaultHero'>
            {children}
        </header>
    );
}

export default SimpleHero;