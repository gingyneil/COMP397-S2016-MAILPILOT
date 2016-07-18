var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    /**THIS IS THE Island OBJECT USED IN THE GAME
     *
     * @export
     * @class ocean
     * @extends {createjs.bitmap}
     */
    var Island = (function (_super) {
        __extends(Island, _super);
        //CONSTRUCTORS +++++++++++++++++++++++
        /**
         * creates and instance of the ocean
         * @constructor
         * @param {string}
         *
         */
        function Island(imageString) {
            _super.call(this, core.assets.getResult(imageString));
            this.start();
        }
        Object.defineProperty(Island.prototype, "width", {
            //public properties
            get: function () {
                return this._width;
            },
            set: function (newWidth) {
                this._width = newWidth;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Island.prototype, "height", {
            get: function () {
                return this._height;
            },
            set: function (newHeight) {
                this._height = newHeight;
            },
            enumerable: true,
            configurable: true
        });
        /**
         *
         * resets the object outside of the view port
         * @private
         * @method_reset
         * @returns {void}
         */
        Island.prototype._reset = function () {
            this.y = -this.height;
            //gets a random x axis
            this.x = Math.floor((Math.random() * (640 - (this.width * .5))) + (this.width * .5));
        };
        /**
         * checks if the object has reached its boundaries
         * @private
         * @method_checkbounds
         * @returns {void}
         *
         */
        Island.prototype._checkBounds = function () {
            if (this.y >= (480 + (this.height * .5))) {
                this._reset();
            }
        };
        // METHODS+++++++++++++++++++++++++++++++++++++++
        /**
         *
         * this method is used to initialize public properties and private instance variables
         * @public
         * @method start@returns {void}
         */
        Island.prototype.start = function () {
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.regX = this.width * .5;
            this.regY = this.height * .5;
            this._reset();
            this._dy = 5; // px per frame
        };
        /**
         *
         * this method updates the onject every frame
         *
         * @public
         * @method update
         * @returns {void}
         *
         */
        Island.prototype.update = function () {
            this.y += this._dy;
            this._checkBounds();
        };
        return Island;
    }(createjs.Bitmap));
    objects.Island = Island;
})(objects || (objects = {}));
//# sourceMappingURL=island.js.map