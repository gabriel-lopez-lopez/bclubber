/**
 * Componente Desplegable
 * 
 */
// Dependencias
import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types';

// Componentes
import { ButtonLink } from '../Buttons';
import ArrowDown from '../Arrows';

const Dropdown = ({ children, className, data }) => {

    const node = useRef();

    const [show, setShow] = useState(false);

    const handleClick = (e) => {
        if (node.current.contains(e.target)) {
            setShow(!show);
        } else {
            setShow(false);
        }
    };

    useEffect(() => {
        window.addEventListener("click", handleClick);
        return () => {
            window.removeEventListener("click", handleClick);
        };
    }, []);

    const ItemDropDown = ({ id, description }) =>
        <a className="dropdown--item" href="#" data-id={id}>{description}</a>;

    return (
        <div
            ref={node}
            className={[
                'o-dropdown',
                className || null
            ].join(' ').trim()}>
            <ButtonLink onClick={() => setShow(!show)}>
                {children}
                <ArrowDown active={show} />
                <div className={[
                    'o-dropdown--menu',
                    show ? 'show' : null
                ].join(' ').trim()}>
                    {data.map(d => <ItemDropDown key={`item-${d.id}`} {...d} />)}
                </div>
            </ButtonLink>
        </div>
    );
};

Dropdown.defaultProps = {
    data: []
};

Dropdown.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            description: PropTypes.string
        }),
    ).isRequired
};

export default Dropdown;