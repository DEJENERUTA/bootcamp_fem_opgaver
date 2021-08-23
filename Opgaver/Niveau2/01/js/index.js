const button = document.querySelector("#buttons");
const knapper = document.querySelectorAll("#buttons button");
button.addEventListener("click", lightUp);
function lightUp(e) {
	for (let i = 0; i < knapper.length; i++) {
		knapper[i].disabled = true;
	}
	e.target.disabled = false;
}
