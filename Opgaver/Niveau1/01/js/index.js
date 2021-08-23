const button = document.querySelector("#my-button");
const colorPicor = ["#eee", "#7f7"];
let index = 0;
button.addEventListener("click", change);
function change() {
	if (index == 0) {
		this.style.backgroundColor = colorPicor[1];
		index = 1;
	} else {
		this.style.backgroundColor = colorPicor[0];
		index = 0;
	}
}
