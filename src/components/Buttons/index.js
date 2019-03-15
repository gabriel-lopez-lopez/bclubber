/**
 * Componentes Botones
 *
 */
// Dependencias
import React from 'react';

/**
 * Componente Botón
 * @param {Object} props Props del componente
 */
const Button = (props) => {
    return (
        <button
            {...props}
            type="button"
            className={[
                'gll-button',
                props.className ? props.className : null
            ].join(' ').trim()}
            onClick={props.onClick}>
            {props.children}
        </button>
    );
};

/**
 * Extiende el componente Button con la clase ButtonBlue. 
 * @param {Object} props Props del componente
 */
export const ButtonBlue = (props) => {
    return (
        <Button
            type="button"
            {...props}
            className={[
                'gll-button--blue',
                props.className ? props.className : null
            ].join(' ').trim()}
            onClick={props.onClick} >
            {props.children}
        </Button>
    );
};

/**
 * Extiende el componente Button con la clase ButtonPositive. 
 * @param {Object} props Props del componente
 */
export const ButtonPositive = (props) => {
    return (
        <Button
            type="button"
            {...props}
            className={[
                'gll-button--positive',
                props.className ? props.className : null
            ].join(' ').trim()}
            onClick={props.onClick} >
            {props.children}
        </Button>
    );
};

/**
 * Extiende el componente Button con la clase ButtonNeutral. 
 * @param {Object} props Props del componente
 */
export const ButtonNeutral = (props) => {
    return (
        <Button
            type="button"
            {...props}
            className={[
                'gll-button--neutral',
                props.className ? props.className : null
            ].join(' ').trim()}
            onClick={props.onClick} >
            {props.children}
        </Button>
    );
};

/**
 * Extiende el componente Button con la clase ButtonNegative. 
 * @param {Object} props Props del componente
 */
export const ButtonNegative = (props) => {
    return (
        <Button
            type="button"
            {...props}
            className={[
                'gll-button--negative',
                props.className ? props.className : null
            ].join(' ').trim()}
            onClick={props.onClick} >
            {props.children}
        </Button>
    );
};

/**
 * Extiende el componente Button con la clase ButtonLink. 
 * @param {Object} props Props del componente
 */
export const ButtonLink = (props) => {
    return (
        <Button
            type="button"
            {...props}
            className={[
                'gll-button--link',
                props.className ? props.className : null
            ].join(' ').trim()}
            onClick={props.onClick} >
            {props.children}
        </Button >
    );
};