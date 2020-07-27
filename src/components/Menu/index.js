import React from 'react';

import Button from '../Button';
import Logo from '../../assets/img/Logo.png';
import './Menu.css';

function Menu() {
  return(
    <nav className="Menu">
      <a href="/">
        <img src={Logo} alt="Techflix logo" className="Logo"/>
      </a>

      <Button as="a" className="ButtonLink" href="/">
        Novo vídeo
      </Button>
    </nav>
  );
}

export default Menu;