/* const button = document.querySelector("#buttons");
const knapper = document.querySelectorAll("#buttons button");
button.addEventListener("click", lightUp);
function lightUp(e) {
	for (let i = 0; i < knapper.length; i++) {
		knapper[i].disabled = true;
	}
	e.target.disabled = false;
} */
//another way of solving
let buttonContainer = document.querySelector("#buttons");
let buttons = document.querySelectorAll("button");

buttonContainer.addEventListener("click", (event) => {
	if (event.target.localName === "button") {
		buttons.forEach((button) => button.removeAttribute("style"));
		event.target.style.backgroundColor = "red";
	}
});
