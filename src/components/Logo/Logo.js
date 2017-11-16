import React from 'react';

import sigmaLogo from '../../assets/images/sigma_logo.png';
import classes from './Logo.css';

const logo = (props) => (
    <div className={classes.Logo} style={{height: props.height}}>
        <img src={sigmaLogo} alt="sigmaLogo" />
    </div>
);

export default logo;