class ButtonCount extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });

		this.count = 0;
		this.shadowRoot.innerHTML = `<button>Times Clicked: ${this.count}</button>`;
		this.shadowRoot.querySelector('button').addEventListener('click', () => {
			this.shadowRoot.querySelector('button').innerHTML = `Times Clicked: ${++this.count}`;
		});
	}
}

window.customElements.define('button-count', ButtonCount);