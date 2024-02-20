import PropTypes from 'prop-types';

export const Counter = ({ value }) => {
    return (
        // <> es una abreviación de un Fragmento, en REACT siempre se debe retornar un nodo padre
        // Se usa {} para renderizar JS dentro del XML representando el DOM
        <>
            <h1>Counter</h1>
            <h2>{value}</h2>
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