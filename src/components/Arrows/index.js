/**
 * Componente Flecha
 * 
 */
// Dependencias
import React from 'react';

/**
 * Flecha abajo
 * @param {Object} props Props del componente
 */
const ArrowDown = ({ className, active }) => {
    return (
        <span className={[
            'o-arrow',
            className ? className : null,
            active ? 'active' : null
        ].join(' ').trim()}>
            <span className="l-bar" />
            <span className="r-bar" />
        </span>
    );
};

/**
 * Flecha derecha
 * @param {Object} props Props del componente
 */
const ArrowRight = ({ className }) => {
    return (
        <span className={[
            'o-arrow',
            className ? className : null
        ].join(' ').trim()}>
            <span className="t-bar" />
            <span className="b-bar" />
        </span>
    );
};

export {
    ArrowDown,
    ArrowRight
}

export default ArrowDown;