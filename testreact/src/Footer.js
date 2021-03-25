import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
			<div id="pie">
				<footer>
					<p>Este es el pie de pagina. </p>
					<p>No sé muy bien que poner en este footer, así que esto es un texto de relleno temporal</p>
					<ol>
						<li>Head</li>
						<ul>
							<li>Title</li>
						</ul>
						<li>Body</li>
						<ul>
							<li>Header</li>
							<li>Nav</li>
							<li>Main</li>
							<li>Footer</li>
						</ul>
						<li><strong>Wow!</strong></li>
					</ol>
				</footer>
			</div>
    );
  }
}

export default Footer;
