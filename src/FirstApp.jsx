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

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired
};