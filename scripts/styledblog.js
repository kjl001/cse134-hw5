export let config = {
	index: 3
}

window.storage = [];

const container = document.getElementById("container");

var newBlog = {
	title: "Started on Homework 4!",
	time: "February 23, 2023",
	summary: "Started on my Homework 4 assignment for CSE 134B. I also have other projects too, however.",
	index: 0
};
storage.push(newBlog);

var newBlog2 = {
	title: "Finished up a CSE 123 Project",
	time: "February 27, 2023",
	summary: "Finally finished PA3 for the class. Had to visit office hours for some questions.",
	index: 1
};
storage.push(newBlog2);

var newBlog3 = {
	title: "Finished Homework 4!",
	time: "March 1, 2023",
	summary: "Finished up Homework 4 for CSE 134B. Updated portfolio website with javascript.",
	index: 2
};
storage.push(newBlog3);

/* Set to local storage */
localStorage.setItem("blogs", JSON.stringify(storage));

const diagBox = document.getElementById("diagBox");
diagBox.addEventListener("close", () => {
	/* When cancel or no input, just exit */
	if (diagBox.returnValue == "Cancel" || document.getElementById("title-input").value == "" || document.getElementById("time-input").value == "" || document.getElementById("summary-input").value == "") {
		document.getElementById("title-input").value = "";
		document.getElementById("time-input").value = "";
		document.getElementById("summary-input").value = "";
	}

	/* When saving, create new blog */
	else if (diagBox.returnValue == "Save") {
		/* Fill template with dialog input */
		const addTemp = document.getElementById("blog-template");
		addTemp.content.querySelector("#blog").querySelector("#title").innerHTML = DOMPurify.sanitize(document.getElementById("title-input").value);
		addTemp.content.querySelector("#blog").querySelector("#time").innerHTML = DOMPurify.sanitize(document.getElementById("time-input").value);
		addTemp.content.querySelector("#blog").querySelector("#summary").innerHTML = DOMPurify.sanitize(document.getElementById("summary-input").value);
		addTemp.content.querySelector("#blog").querySelector(".blog-id").id = config.index;
		config.index++;

		/* Add to storage array */
		const blogObj = {
			title: addTemp.content.querySelector("#blog").querySelector("#title").innerHTML,
			time: addTemp.content.querySelector("#blog").querySelector("#time").innerHTML,
			summary: addTemp.content.querySelector("#blog").querySelector("#summary").innerHTML,
			index: addTemp.content.querySelector("#blog").querySelector(".blog-id").id
		};
		storage.push(blogObj);

		/* Set to local storage */
		localStorage.setItem("blogs", JSON.stringify(storage));

		/* Empty dialog */
		document.getElementById("title-input").value = "";
		document.getElementById("time-input").value = "";
		document.getElementById("summary-input").value = "";

		container.appendChild(addTemp.content.cloneNode(true));

		/* Remove empty indicator */
		document.getElementById("empty").setAttribute("hidden", "hidden");
		container.removeAttribute("hidden");
	}

	/* Editing current blog */
	else {
		const currIndex = diagBox.querySelector(".diag-id").id;
		const editBlog = document.getElementById(currIndex).parentElement;
		editBlog.querySelector("#title").innerHTML = DOMPurify.sanitize(document.getElementById("title-input").value);
		editBlog.querySelector("#time").innerHTML = DOMPurify.sanitize(document.getElementById("time-input").value);
		editBlog.querySelector("#summary").innerHTML = DOMPurify.sanitize(document.getElementById("summary-input").value);

		/* Find index of element to edit */
		for (let i = 0; i < storage.length; i++) {
			if (storage[i].index == currIndex) {
				storage[i].title = editBlog.querySelector("#title").innerHTML;
				storage[i].time = editBlog.querySelector("#time").innerHTML;
				storage[i].summary = editBlog.querySelector("#summary").innerHTML;
			}
		}

		localStorage.setItem("blogs", JSON.stringify(storage));

		document.getElementById("title-input").value = "";
		document.getElementById("time-input").value = "";
		document.getElementById("summary-input").value = "";
	}
});