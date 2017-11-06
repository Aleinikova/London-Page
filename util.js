function Slider(sliderContent, prevButton, nextButton, nextElementOffset) {
	this.elements = sliderContent;
	this.prevButton = prevButton;
	this.nextButton = nextButton;
	this.elementsLength = sliderContent.length;
	this.firstElement = 0;
	this.offset = nextElementOffset;

	this.moveElements = function() {
		for (let i = 0; i < this.elementsLength; i++) {
			this.elements[i].style.left = this.offset * (i - this.firstElement) + 'px';
		}
	};

	this.onClickArrowPrev = function(moveByNumber) {
		if (this.firstElement === 0) {
			return null;
		}
		this.firstElement -= moveByNumber;
		this.moveElements();
	};

	this.onClickArrowNext = function (moveByNumber) {
		if (this.firstElement + 1 === this.elementsLength - 1) {
			return null;
		}
		this.firstElement += moveByNumber;
		this.moveElements();
	};
}

function init (sliderContentClassName, prevButtonClassName, nextButtonClassName, margin, moveByNumber, transition) {
	const sliderContent = document.getElementsByClassName(sliderContentClassName)[0].children;
	const prevButton = document.getElementById(prevButtonClassName);
	const nextButton = document.getElementById(nextButtonClassName);
	const sliderElementWidth = getComputedStyle(sliderContent[0]).width;
	const nextElementOffset = Number(sliderElementWidth.slice(0, sliderElementWidth.length - 2)) + margin;

	const newSlider = new Slider(sliderContent, prevButton, nextButton, nextElementOffset);

	for (let i = 0; i < newSlider.elementsLength; i++) {
		newSlider.elements[i].style.transition = transition + "ms";
	}
	newSlider.moveElements();
	newSlider.prevButton.onclick = function() { newSlider.onClickArrowPrev(moveByNumber)}
	newSlider.nextButton.onclick = function() { newSlider.onClickArrowNext(moveByNumber)}
}
