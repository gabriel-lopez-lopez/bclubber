/**
 * Componente Header
 * 
 */
// Dependencias
import React from 'react';

// Componentes
import Logo from '../../Logo';
import Auth from '../../Auth';
import DropDownCategories from '../../Dropdown/Categories';
import DropDownCities from '../../Dropdown/Cities';

// Iconos SVG
import { ReactComponent as IconSearch } from '../../../assets/svg/search-icon.svg';
import { ReactComponent as IconSettings } from '../../../assets/svg/settings-icon.svg';
import { ReactComponent as IconNav } from '../../../assets/svg/nav-icon.svg';

/**
 * Contenedor iconos
 */
const Icons = () => [
    <IconSearch key="icon-search" />,
    <IconSettings key="icon-seattings" />,
    <IconNav key="icon-nav" />
];

/**
 * Cabecera principal
 */
const Header = () => <header>
    <div className="wrapper">
        <div className="gll-row">

            <div className="gll-col-tablet-p-1 hidden-phone" />

            <div className="gll-col-phone-5 gll-col-tablet-p-4 gll-col-tablet-l-6 gll-col-desktop-7">
                <Logo />
                <div className="wrapper--dropdowns">
                    <DropDownCategories />
                    <DropDownCities />
                </div>
            </div>

            <div className="gll-col-phone-7 gll-col-tablet-p-6 gll-col-tablet-l-4 gll-col-desktop-3">
                <div className="wrapper--auth">
                    <Auth />
                </div>
                <div className="wrapper--icons">
                    <Icons />
                </div>
            </div>

            <div className="gll-col-tablet-p-1 hidden-phone" />

        </div>
    </div>
</header>;

export default Header;