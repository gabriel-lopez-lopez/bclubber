/**
 * Componente Etiqueta Precio
 * 
 */
// Dependencias
import React from 'react';

/**
 *  Etiqueta Precio 
 * @param {Object} props Props del componente
 */
const TagPrice = ({ amount }) => <span className="o-tag is--price">
    <span className="since">Desde</span>
    <span className="amount">{amount}€</span>
</span>;

export default TagPrice; 