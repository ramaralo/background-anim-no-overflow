
/**
 * Created by rubenoliveira on 08-05-2015.
 */
function BgAnim(config) {
    var currentPosition;
    var INITIAL_POS;
    var raf = null;

    var domElements = {
        main: null
    };



    (function () {
        domElements.main = config.element;
        INITIAL_POS = config.initialPosition;

        domElements.main.style.backgroundPositionY = INITIAL_POS;

        currentPosition = INITIAL_POS;
    })(config);


    function getBgPosition() {
        var val = domElements.main.style.backgroundPositionY;
        return (val !== '') ? null : val;
    }

    function calcNextPosition() {
        currentPosition = (currentPosition + 20) % 300;
    }

    function animate() {
        calcNextPosition();

        domElements.main.style.backgroundPositionY = currentPosition + 'px';

        raf = requestAnimationFrame(animate);
    }

    this.getMainElement = function () {
        return domElements.main;
    };


    this.start = function () {
        animate();
    };
}