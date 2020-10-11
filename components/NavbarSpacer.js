import React from 'react';
import logo from "../images/RRandallLogo.png";

export default function NavbarSpacer()
{
    // Content to space out area behind fixed navbar. Temporary fix for now.

    // Copied style from logo image
    const logoStyle = {
        width: '160px',
        marginTop: '0.5rem',
        marginBottom: '0.2rem',
        marginLeft: '6%'
    }

    return(
        <div style={{width: '100%'}}>
            <div style={{width: '60%'}}>
                <img style={logoStyle} src={logo} alt="business logo" />
            </div>
        </div>
    )
}