/**
 * Contenedor "Lo más destacado"
 * 
 */
// Dependencias
import React from 'react';

// Componentes
import OutstandingList from './list';

// Mockup datos
import data from '../../../data.json';

const Outstanding = () => <div className="wrapper">

    <div className="gll-row">

        <div className="hidden-phone gll-col-tablet-p-1 gll-col-tablet-l-1 gll-col-desktop-1" />

        <div className="gll-col-tablet-p-10 gll-col-tablet-l-10 gll-col-desktop-10">

            <section>
                <header>
                    <h1>Lo más destacado</h1>
                    <h2>Selección por nuestros editores para ti</h2>
                </header>
                <OutstandingList data={data.lomasdestacado} />
            </section>

        </div>

        <div className="hidden-phone gll-col-tablet-p-3 gll-col-tablet-l-1 gll-col-desktop-1" />

    </div>

</div>;

export default Outstanding;