import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
			<div id="contenedor">
				<div id="titulo">
					<header>
						<h1>Index</h1>
					</header>
				</div>
				<div id="menu">
					<nav>
						<h2>Menu</h2>
						<ul>
							<li><a href="index.html">Index</a></li>
							<li><a href="apuntes.html">Apuntes</a></li>
							<li><a href="cv.html">Curriculum Vitae</a></li>
							<li><a href="contacto.html">Contacto</a></li>
							<li><a href="minijuego.html">Minijuego</a></li>
						</ul>
					</nav>
				</div>
			</div>
    );
  }
}

export default Header;
