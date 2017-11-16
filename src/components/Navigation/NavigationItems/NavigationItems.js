//Import React component
import React from 'react';

//Import styles
import classes from './NavigationItems.css';
//Import Components 
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" exact>Crear Pregunta</NavigationItem>
        <NavigationItem link="/orders">Crear Encuesta</NavigationItem>
        <NavigationItem link="/registarusuario">Registrar Usuario</NavigationItem>
        <NavigationItem link="/vermaterialidad">Ver Materialidad</NavigationItem>
    </ul>
);

export default navigationItems;