/**
 *  Desplegable Categorías
 * 
 */
// Dependencias
import React from 'react';

// Componentes
import Dropdown from '../index';

// Datos harcodeados
const data = [
    { id: 0, description: 'Categoría 1' },
    { id: 1, description: 'Categoría 2' },
    { id: 2, description: 'Categoría 3' }
];
const DropdownCategories = () => <Dropdown className="is--categories" data={data}>Categorías</Dropdown>;

export default DropdownCategories;