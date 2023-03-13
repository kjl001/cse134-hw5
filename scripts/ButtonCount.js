let count = 0;

class ButtonCount extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });

		function addCount() {
			count++;
			this.shadowRoot.innerHTML = `<button onclick='addCount()'>Times Clicked: ${count}</button>`;
		}


		this.shadowRoot.innerHTML = `<button onclick='addCount()'>Times Clicked: ${count}</button>`;
	}
}

window.customElements.define('button-count', ButtonCount);