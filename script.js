
/* Variables */

const discountToggle = document.getElementById('toggle-btn');
const rangeSlider = document.getElementById('myRange');
const viewsCount = document.getElementById('views');
const cost = document.getElementById('cost');


/* Update pageviews and pricing / change range slider colour when dragged */

function updatePrices(value) {


    let pricing;

    if (value > 0 && value <= 20) {

        viewsCount.textContent = '10k pageviews';

        pricing = 8;

    } else if (value > 20 && value <= 40) {

        viewsCount.textContent = '50k pageviews';

        pricing = 12;

    } else if (value > 40 && value <= 60) {

        viewsCount.textContent = '100k pageviews';

        pricing = 16;

    } else if (value > 60 && value <= 80) {

        viewsCount.textContent = '500k pageviews';

        pricing = 24;

    } else if (value > 80 && value <= 100) {

        viewsCount.textContent = '1m pageviews';

        pricing = 36;

    }


    if (discountToggle.checked) {

        const yearlyPrice = pricing - (pricing * .25);

        cost.textContent = `$${yearlyPrice}.00`;

    } else {

        cost.textContent = `$${pricing}.00`;
    }

    rangeSlider.style.background = `linear-gradient(
		to right,
		hsl(174, 77%, 80%) 0%,
        hsl(174, 77%, 80%) 0%,
		hsl(174, 77%, 80%) ${value}%,
		 hsl(224, 65%, 95%) 10%,
		 hsl(224, 65%, 95%) 100%
	)`;

};



/* Event Listeners */

rangeSlider.addEventListener('input', function() {



	updatePrices(rangeSlider.value);


})


discountToggle.addEventListener('input', function() {


    updatePrices(rangeSlider.value);

})








