/**
 * Componente Cover
 * 
 */
// Dependencias
import React from 'react';

// Componentes
import TagPrice from '../Tags';
import { ButtonNegative, ButtonPositive } from '../Buttons';

// Imagen (Esto es un ejemplo, no debe hacerse así nunca)
import '../../assets/images/cover.png';

/**
 * Contenedor de imágenes
 */
const Cover = ({ data }) =>
    <article className="o-cover">
        <div className="overlay" />
        <figure>
            <TagPrice amount={data.amount} />
            <ButtonNegative>AGOTÁNDOSE</ButtonNegative>
            <ButtonPositive>{data.discount}</ButtonPositive>
            <img src={data.image} alt={data.title} />
        </figure>
    </article>;

export default Cover;