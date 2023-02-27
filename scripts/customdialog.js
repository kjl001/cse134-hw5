export function showDiag() {

}


export function showPrompt() {
	const diagLabel = document.getElementById("diagLabel");
	diagLabel.innerText = "What is your name?";
	const txtInput = document.getElementById("input");
	txtInput.setAttribute("type", "text");

	document.getElementById("cancel").removeAttribute("hidden");
	document.getElementById("ok").removeAttribute("hidden");

	const diag = document.getElementById("diagBox");
	diag.showModal();
}

export let config = {
	value: ""
};
export function showOutput() {
	document.getElementById("confirmed").innerHTML = "Prompt result : " + config.value;
}