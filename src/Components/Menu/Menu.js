import React from 'react';
import { Link } from 'react-router-dom';
//Materil components
import AppMenu from '@material-ui/core/AppBar/AppBar';
import ToolBar from '@material-ui/core/Toolbar/Toolbar';
import Typography from '@material-ui/core/Typography/Typography';

const Menu = () => {

  return (
    <AppMenu>
      <ToolBar>
        <Typography>
          <Link to="/">Inicio</Link>
        </Typography>
        <Typography>
          <Link to="/about">Nosotros</Link>
        </Typography>
        <Typography>
          <Link to="/services">Servicios</Link>
        </Typography>
        <Typography>
          <Link to="/contact">Contacto</Link>
        </Typography>
      </ToolBar>
    </AppMenu>
  );
}

export default Menu;