import PropTypes from 'prop-types';

export const FirstApp = ({ title, subTitle }) => {

    return (
        // <> es una abreviación de un Fragmento, en REACT siempre se debe retornar un nodo padre
        // Se usa {} para renderizar JS dentro del XML representando el DOM
        <>
            <h1>{title}</h1>
            <p>{subTitle}</p>
        </>
    );
};

// Cuando se usa Typescript no es necesario usar el paquete de prop-types
// ya que se pueden declarar interfaces
FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired
};

// Se pueden establecer valores por defecto para las props construyendo un objeto defaultProps

FirstApp.defaultProps = {
    title: 'No hay título',
    subTitle: 'No hay subtítulo'
};