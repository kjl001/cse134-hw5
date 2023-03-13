import * as React from 'react-dom';

class ReactButton extends HTMLElement {
	connectedCallback() {
		const btn = document.createElement('button');
		this.attachShadow({ mode: 'open' }).appendChild(btn);

		btn.addEventListener('click', () => {
			btn.innerHTML = `Times Clicked: ${++this.count}`;
		});

		this.count = 0;
		const root = React.createRoot(btn);
		root.render(`Times Clicked: ${this.count}`);
	}
}

customElements.define('react-button', ReactButton);