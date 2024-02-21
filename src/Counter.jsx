import { useState } from 'react';
import PropTypes from 'prop-types';

export const Counter = ({ value }) => {

    // Este es el hook que permite configurar inicialmente el estado del componente
    const [counter, setCounter] = useState(value);

    const handleAdd = () => setCounter(counter + 1);
    const handleSubtract = () => setCounter(counter - 1);
    const handleReset = () => setCounter(value);

    return (
        // <> es una abreviación de un Fragmento, en REACT siempre se debe retornar un nodo padre
        // Se usa {} para renderizar JS dentro del XML representando el DOM
        <>
            <h1>Counter</h1>
            <h2>{counter}</h2>

            <button onClick={handleAdd}>+1</button>
            <button onClick={handleSubtract}>-1</button>
            <button onClick={handleReset}>Reset</button>
        </>
    );
};

// Cuando se usa Typescript no es necesario usar el paquete de prop-types
// ya que se pueden declarar interfaces
Counter.propTypes = {
    value: PropTypes.number.isRequired
};

// Se pueden establecer valores por defecto para las props construyendo un objeto defaultProps
Counter.defaultProps = {
    value: 1,
};