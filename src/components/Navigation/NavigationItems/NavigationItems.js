//Import React component
import React from 'react';

//Import styles
import classes from './NavigationItems.css';
//Import Components 
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" exact>Inicio</NavigationItem>
        <NavigationItem link="/encuesta">Crear Encuesta</NavigationItem>
        <NavigationItem link="/usuario">Usuarios</NavigationItem>
        <NavigationItem link="/resultado">Resultados</NavigationItem>
    </ul>
);

export default navigationItems;