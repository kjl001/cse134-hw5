import VueButton from './VueButton.ce.vue';

class ReactButton extends HTMLElement {
	connectedCallback() {
		this.count = 0;
		const btn = document.createElement('button');
		btn.addEventListener('click', () => {
			btn.innerHTML = `Times Clicked: ${++this.count}`;
		});

		this.attachShadow({ mode: 'open' }).appendChild(btn);

		const root = ReactDOM.createRoot(btn);
		root.render(`Times Clicked: ${this.count}`);
	}
}

customElements.define('react-button', ReactButton);
customElements.define('vue-button', defineCustomElement(VueButton));