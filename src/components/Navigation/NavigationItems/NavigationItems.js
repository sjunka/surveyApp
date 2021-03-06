//Import React component
import React from 'react';

//Import styles
import classes from './NavigationItems.css';
//Import Components 
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" exact>Inicio</NavigationItem>
        <NavigationItem link="/encuesta/new">Crear Encuesta</NavigationItem>
        <NavigationItem link="/usuario/new">Usuarios</NavigationItem>
        <NavigationItem link="/resultado">Resultados</NavigationItem>
    </ul>
);

export default navigationItems;