function skjulElementViaCssSelector(cssSelector) {
	const elementFinder = document.querySelector(cssSelector);
	skjulElement(elementFinder);
}
skjulElementViaCssSelector("#Bastared");

function skjulElement(element) {
	if (element !== null) {
		element.style.display = "none";
	}
}
