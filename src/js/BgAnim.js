
/**
 * Created by rubenoliveira on 08-05-2015.
 */
function BgAnim(config) {
    var currentPosition;
    var INITIAL_POS;
    var increment = 20;
    var myObj = this;
    
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
    };

    this.increaseSpeed = function () {
        increment++;

        console.log(increment);
        
        if(increment === 0) {
            this.stop();
        } else {
            this.start(); // FIXME: remove this
        }
    };

    this.decreaseSpeed = function () {
        increment--;

        console.log(increment);

        if(increment === 0) {
            this.stop();
        } else {
            this.start();
        }
    };
    
    this.stop = function () {
        cancelAnimationFrame(raf);
    }
}
