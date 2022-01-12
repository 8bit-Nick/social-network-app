import React from 'react';
import classes from './Header.module.css';

const Header = React.memo(() => {
    return (
        <header className={classes.header}>
            Facepalm
        </header>
    );
})

export default Header;
