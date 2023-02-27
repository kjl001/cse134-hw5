export function showDiag() {

}


export function showPrompt() {
	const diagLabel = document.getElementById("diagLabel");
	diagLabel.innerText = "What is your name?";
	const txtInput = document.getElementById("input");
	txtInput.setAttribute("type", "hidden");

	const diag = document.getElementById("diagBox");
	diag.showModal();
}

export let config = {
};
export function showOutput() {
	const safe = DOMPurify.sanitize(config.value);
	document.getElementById("confirmed").innerHTML = "Prompt result : " + safe;
}