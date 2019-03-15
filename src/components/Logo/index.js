/**
 * Componente Logo
 * 
 */
// Dependencias
import React from 'react';

// Componentes
import { ButtonLink } from '../Buttons';

// SVG
import { ReactComponent as LogoComponent } from '../../assets/svg/logo.svg';
 
const Logo = () => {
    return (
        <ButtonLink className="no-padding">
            <a href="/">
                <LogoComponent />
            </a>
        </ButtonLink>
    );
};

export default Logo;