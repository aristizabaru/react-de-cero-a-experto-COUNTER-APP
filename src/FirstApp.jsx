const getSaludo = (name) => `Hola, soy ${name}`;

export const FirstApp = () => {
    return (
        // <> es una abreviación de un Fragmento, en REACT siempre se debe retornar un nodo padre
        // Se usa {} para renderizar JS dentro del XML representando el DOM
        <>
            <h1>{getSaludo('Andrés')}</h1>
            <p>Soy un desarrollador full stack</p>
        </>
    );
};
