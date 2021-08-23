function skjulElementViaCssSelector(cssSelector) {
	const elementFinder = document.querySelector(cssSelector);
	elementFinder.style.display = "none";
}
skjulElementViaCssSelector("#Bastared");
