import React from 'react';
import "../styles/Header.css";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function Header({navOpened, setOpened, inScroll}) {
    return (
        <div className={`header ${inScroll? "scroll":""}`}>

            <div className='header_logo'>
                <img src='https://logos-marques.com/wp-content/uploads/2021/03/Netflix-logo.png' alt='Netflix-logo' />
            </div>

            <div className='header_icon'onClick={setOpened}>
               {navOpened? <CloseIcon fontSize='large' />: <MenuIcon fontSize='large'/>}
            </div>
        </div>
    )
}

export default Header;