let count = 0;

class ButtonCount extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });

		this.shadowRoot.innerHTML = `<button id='countBtn'>Times Clicked: ${count}</button>`;

		document.getElementById('countBtn').addEventListener('click', () => {
			count++;
			this.shadowRoot.innerHTML = `<button onclick='this.addCount()'>Times Clicked: ${count}</button>`;
		});
	}
}

window.customElements.define('button-count', ButtonCount);