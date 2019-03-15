/**
 * Componente Layout
 * Forma la estructura de los principales componentes genéricos
 * 
 */
// Dependencias
import React from 'react';

// Componentes
import Header from '../Header';
import Outstanding from '../Outstanding';
import Events from '../Events';

const Layout = () => {
    return (
        <>
            <Header />
            <Outstanding />
            <Events />
        </>
    );
  
};

export default Layout;