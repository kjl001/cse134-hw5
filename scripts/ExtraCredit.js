class ReactButton extends HTMLElement {
	connectedCallback() {
		const btn = document.createElement('button');
		this.attachShadow({ mode: 'open' }).appendChild(btn);

		const root = ReactDOM.createRoot(btn);
		root.render('Testing');
	}
}

customElements.define('react-button', ReactButton);