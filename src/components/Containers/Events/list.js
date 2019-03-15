/**
 * Listado "Eventos"
 * 
 */
// Dependencias
import React from 'react';

// Componentes
import Cover from '../../Cover';

/**
 * Listado de elementos "Eventos"
 */
const EventsListCovers = ({ data }) =>
    data.map(d =>
        <div key={`cover-${d.id}`} className="gll-col-phone-12 gll-col-tablet-p-4 gll-col-tablet-l-3 gll-col-desktop-3">
            <Cover data={d} />
            <EventsListMetaData data={d} />
        </div>
    );

/**
 * Detalle de un elemento "Evento"
 */
const EventsListMetaData = ({ data }) =>
    <div className="c-metadata">
        <span className="date">{data.date} </span>
        <span className="time">{data.time}</span>
        <h3>{data.title}</h3>
        <span className="location">{data.location}</span>
    </div>;

/**
 * Contenedor para el listado "Eventos"
 */
const EventsList = ({ data }) => <div className="o-cover gll-row">
    <EventsListCovers data={data} />
</div>;

export default EventsList;