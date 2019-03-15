/**
 *  Desplegable Ciudades
 * 
 */
// Dependencias
import React from 'react';

// Componentes
import Dropdown from '../index';

// Datos harcodeados
const data = [
    { id: 0, description: 'Ciudad 1' },
    { id: 1, description: 'Ciudad 2' },
    { id: 2, description: 'Ciudad 3' }
];
const DropdownCities = () => <Dropdown className="is--cities" data={data}>Selecciona tu ciudad</Dropdown>;

export default DropdownCities;