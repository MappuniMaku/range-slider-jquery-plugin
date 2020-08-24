'use strict';

import './styles.sass';

import Slider from './slider';

let slider = new Slider ('slider');

console.log(slider.getName());

let counter = {
    value: 0,
    add: function () {
        this.value += 1;
    },
    getValue: function () {
        return this.value;
    }
};

console.log(counter.getValue());

function createAnalytics () {
    let counter = 0;
    let isDestroyed = false;

    const listener = () => counter += 1;

    document.addEventListener('click', listener);

    return {
        destroy () {
            document.removeEventListener('click', listener);
            isDestroyed = true;
        },

        getClicks () {
            if (isDestroyed) {
                return 'destroyed';
            }
            return counter;
        }
    }
}

window.analytics = createAnalytics();

$(document).ready(function() {
    console.log('jQuery loaded');
});