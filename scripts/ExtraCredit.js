class ReactButton extends HTMLElement {
	connectedCallback() {
		const btn = document.createElement('section');
		this.attachShadow({ mode: 'open' }).appendChild(btn);

		const root = ReactDOM.createRoot(btn);
		root.render(<p>Test</p>);
	}
}

customElements.define('react-button', ReactButton);