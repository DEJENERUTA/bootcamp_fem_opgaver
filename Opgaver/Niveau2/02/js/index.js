const counterContainers = document.querySelectorAll(".counter");

counterContainers.forEach((counterContainer) => {
	const buttonUp = counterContainer.querySelector(".btn-count-increase");
	const buttonDown = counterContainer.querySelector(".btn-count-decrease");
	const textFinder = counterContainer.querySelector(".text-count");
	const priceFinder = counterContainer.querySelector(".price");
	const totalPriceFinder = counterContainer.querySelector(".total");
	//this function will count up the button
	function calculateTotalPrice() {
		let price = Number(priceFinder.textContent);
		let countUp = Number(textFinder.textContent);
		totalPriceFinder.textContent = price * countUp;
	}

	buttonUp.addEventListener("click", () => {
		let countUp = Number(textFinder.textContent);
		textFinder.textContent = countUp + 1;
		calculateTotalPrice();
	});

	buttonDown.addEventListener("click", () => {
		let countUp = Number(textFinder.textContent);
		if (countUp > 0) {
			textFinder.textContent = countUp - 1;
			calculateTotalPrice();
		}
	});
});
