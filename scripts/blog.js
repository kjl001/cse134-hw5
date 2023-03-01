export let index = 0;
export let currIndex = 0;

export let blog = {
	title: "",
	time: "",
	summary: "",
	index: 0
};

export let storage = [];

/* Edit button */
export function editDiag(elem) {
	const diagBox = document.getElementById("diagBox");
	diagBox.querySelector("#blog-form").querySelector("#title-input").value = elem.querySelector("#title").innerHTML;
	diagBox.querySelector("#blog-form").querySelector("#time-input").value = elem.querySelector("#time").innerHTML;
	diagBox.querySelector("#blog-form").querySelector("#summary-input").value = elem.querySelector("#summary").innerHTML;

	diagBox.querySelector("#blog-form").querySelector("#save").value = "Edit";

	/* Set currIndex to be this index */
	currIndex = elem.querySelector(".blog-id").innerHTML;

	diagBox.showModal();
}

/* Add Button */
export function addDiag() {
	const diagBox = document.getElementById("diagBox");
	diagBox.querySelector("#blog-form").querySelector("#save").value = "Save";
	diagBox.showModal();
}