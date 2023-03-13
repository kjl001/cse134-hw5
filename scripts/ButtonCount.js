let count = 0;

class ButtonCount extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });

		this.shadowRoot.innerHTML = `<button onclick='this.addCount()'>Times Clicked: ${count}</button>`;
	}

	addCount() {
		count++;
		this.shadowRoot.innerHTML = `<button onclick='this.addCount()'>Times Clicked: ${count}</button>`;
	}
}

window.customElements.define('button-count', ButtonCount);