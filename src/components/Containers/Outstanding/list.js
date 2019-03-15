/**
 * Listado "Lo más destacado"
 * 
 */
// Dependencias
import React from 'react';

// Componentes
import { ArrowRight } from '../../Arrows';
import Cover from '../../Cover';
import { ButtonNeutral, ButtonPositive } from '../../Buttons';

/**
 * Listado de elementos "Lo más destacado"
 * @param {Object} data Objeto con los datos a mostrar en el listado
 */
const OutstandingListCovers = ({ data }) =>
    <div className="o-cover gll-row">
        {data.map(d =>
            <div key={`cover-${d.id}`} className="gll-col-phone-12 gll-col-tablet-p-6 gll-col-tablet-l-4 gll-col-desktop-4">
                <Cover data={d} />
                <OutstandingListMetaData data={d} />
            </div>
        )}
    </div>;

/**
 * Más datos del elemento
 * @param {Object} data Objeto con los datos a mostrar
 */
const OutstandingListMetaData = ({ data }) =>
    <div className="c-metadata">
        <span className="date">{data.date} </span>
        <span className="time">{data.time}</span>
        <h3>{data.title}</h3>
        <span className="location">{data.location}</span>
    </div>;

/**
 * Botón Ver todos los destacados
 */
const OutstandingViewAll = () =>
    <div className="o-cover gll-row">
        <div className="gll-col-12">
            <div className="hidden-phone visible">
                <ButtonNeutral>
                    VER TODOS LOS DESTACADOS
                    <ArrowRight className="is--right" />
                </ButtonNeutral>
                <div className="c-separator" />
            </div>
            <div className="hidden visible-phone">
                <ButtonPositive
                    className="gll-button--block">
                    Ver todos los destacados (5)
                </ButtonPositive>
                <div className="c-separator no--border" />
            </div>
        </div>
    </div>

/**
 * Contenedor para el listado "Lo más destacsado"
 * @param {Object} props Props del componente
 */
const OutstandingList = ({ data }) => {
    return (
        <>
            <OutstandingListCovers data={data} />
            <OutstandingViewAll />
        </>
    );
};

export default OutstandingList;