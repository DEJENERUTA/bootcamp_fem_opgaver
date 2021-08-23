function skjulElementViaCssSelector(cssSelector) {
	const elementFinder = document.querySelectorAll(cssSelector);
	skjulElement(elementFinder);
}
skjulElementViaCssSelector("#Bastared .Dejene");
//console.log(document.querySelectorAll("#Bastared .Dejene"));

function skjulElement(element) {
	if (element !== null) {
		for (let i = 0; i < element.length; i++) {
			element[i].style.display = "none";
		}
	}
}
