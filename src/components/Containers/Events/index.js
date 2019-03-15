/**
 * Contenedor Eventos
 * 
 */
// Dependencias
import React from 'react';

// Componentes
import EventsList from './list';

// Mockup datos
import data from '../../../data.json';

const Events = () => <div className="wrapper">

    <div className="gll-row">

        <div className="hidden-phone gll-col-tablet-p-1 gll-col-tablet-l-1 gll-col-desktop-1" />

        <div className="gll-col-tablet-p-10 gll-col-tablet-l-10 gll-col-desktop-10">

            <section>
                <header>
                    <h1>Eventos</h1>
                    <h2>Selección de los mejores eventos</h2>
                </header>
                <EventsList data={data.eventos} />
            </section>

        </div>

        <div className="hidden-phone gll-col-tablet-p-3 gll-col-tablet-l-1 gll-col-desktop-1" />

    </div>

</div>;

export default Events;