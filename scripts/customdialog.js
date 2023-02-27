export let config = {
	value: ""
};

export function showConfirm() {
	const diagLabel = document.getElementById("diagLabel");
	diagLabel.innerText = "Do you confirm this?";
	document.getElementById("input").setAttribute("type", "hidden");

	document.getElementById("cancel").removeAttribute("hidden");
	document.getElementById("ok").removeAttribute("hidden");

	document.getElementById("diagBox").showModal();

	document.getElementById("input").value = diagLabel.returnValue;
}


export function showPrompt() {
	const diagLabel = document.getElementById("diagLabel");
	diagLabel.innerText = "What is your name?";
	const txtInput = document.getElementById("input");
	txtInput.setAttribute("type", "text");

	document.getElementById("cancel").removeAttribute("hidden");
	document.getElementById("ok").removeAttribute("hidden");

	document.getElementById("ok").value = DOMPurify.sanitize(txtInput.value);

	const diag = document.getElementById("diagBox");
	diag.showModal();
}

export function showOutput() {
	document.getElementById("confirmed").innerHTML = "Prompt result : " + config.value;
}