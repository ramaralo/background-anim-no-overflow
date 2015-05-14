
/**
 * Created by rubenoliveira on 08-05-2015.
 */
function BgAnim(config) {
    var currentPosition;
    var INITIAL_POS;
    var increment = 20;
    
    var raf = null;
    var domElements = {
        main: null
    };
    var running = false;


    (function () {
        init(config)
    })(config);
    
    function init(config) {
        domElements.main = config.element;
        INITIAL_POS = config.initialPosition;
    
        domElements.main.style.backgroundPositionY = INITIAL_POS;
    
        currentPosition = INITIAL_POS;
    }
    
    this.init = function (config) {
        init(config);
    };

    function calcNextPosition() {
        currentPosition = (currentPosition + increment) % 300;
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
        running = true;
    };

    this.increaseSpeed = function (increaseVal) {
        if(running) {
            increaseVal = (increaseVal !== undefined) ? increaseVal : 1;
            increment += increaseVal;
        }
    };

    this.decreaseSpeed = function () {
        if(running) {
            increment--;
        }
    };
    
    this.stop = function () {
        cancelAnimationFrame(raf);
        running = false;
    };

    this.getIncrement = function () {
        return increment;
    };

    this.setIncrement = function (val) {
        increment = val;
    };

    this.setPosition = function (val) {
        domElements.main.style.backgroundPositionY = val + 'px';
    };
}
