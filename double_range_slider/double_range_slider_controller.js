function updateLowerLimitValue(selector) {
    const parentElement = document.querySelector(selector);
    const step = parseInt(parentElement.querySelector('.lower-limit-slider').step);
    const limitMin = parseInt(parentElement.querySelector('.lower-limit-slider').min);
    const lowerLimitSpan = parentElement.querySelector('.lower-limit');
    const lowerLimitValue = parseInt(parentElement.querySelector('.lower-limit-slider').value);
    const upperLimitValue = parseInt(parentElement.querySelector('.upper-limit-slider').value);

    if (lowerLimitValue < limitMin) {
        lowerLimitSpan.textContent = limitMin;
        parentElement.querySelector('.lower-limit-slider').value = limitMin;
    } else if (lowerLimitValue > upperLimitValue - step) {
        const value = upperLimitValue - step;
        lowerLimitSpan.textContent = value;
        parentElement.querySelector('.lower-limit-slider').value = value;
    } else {
        lowerLimitSpan.textContent = lowerLimitValue;
    }

    fillLimitedAreaColor(selector);
}

function updateUpperLimitValue(selector) {
    const parentElement = document.querySelector(selector);
    const step = parseInt(parentElement.querySelector('.lower-limit-slider').step);
    const limitMax = parseInt(parentElement.querySelector('.lower-limit-slider').max);
    const upperLimitSpan = parentElement.querySelector('.upper-limit');
    const lowerLimitValue = parseInt(parentElement.querySelector('.lower-limit-slider').value);
    const upperLimitValue = parseInt(parentElement.querySelector('.upper-limit-slider').value);

    if (upperLimitValue > limitMax) {
        upperLimitSpan.textContent = limitMax;
        parentElement.querySelector('.upper-limit-slider').value = limitMax;
    } else if (upperLimitValue < lowerLimitValue + step) {
        const value = lowerLimitValue + step;
        upperLimitSpan.textContent = value;
        parentElement.querySelector('.upper-limit-slider').value = value;
    } else {
        upperLimitSpan.textContent = upperLimitValue;
    }

    fillLimitedAreaColor(selector);
}

function fillLimitedAreaColor(selector) {
    const parentElement = document.querySelector(selector);
    const limitMax = parseInt(parentElement.querySelector('.lower-limit-slider').max);
    const lowerLimitValue = parseInt(parentElement.querySelector('.lower-limit-slider').value);
    const upperLimitValue = parseInt(parentElement.querySelector('.upper-limit-slider').value)
    
    const lowerPercent = (lowerLimitValue / limitMax) * 100;
    const upperPercent = (upperLimitValue / limitMax) * 100;

    const sliderTrack = parentElement.querySelector('.slider-track');

    const limitedAreaColor = "#5B84FF";
    const anotherAreaColor = "lightgray"

    sliderTrack.style.background = `linear-gradient(to right, 
                                    ${anotherAreaColor} ${lowerPercent}%, 
                                    ${limitedAreaColor} ${lowerPercent}%,
                                    ${limitedAreaColor} ${upperPercent}%, 
                                    ${anotherAreaColor} ${upperPercent}%
                                    )`;
}