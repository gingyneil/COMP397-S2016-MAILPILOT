var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    /**THIS IS THE OCEAN OBJECT USED IN THE GAME
     *
     * @export
     * @class ocean
     * @extends {createjs.bitmap}
     */
    var Ocean = (function (_super) {
        __extends(Ocean, _super);
        //CONSTRUCTORS +++++++++++++++++++++++
        /**
         * creates and instance of the ocean
         * @constructor
         * @param {string}
         *
         */
        function Ocean(imageString) {
            _super.call(this, core.assets.getResult(imageString));
            this.start();
        }
        /**
         *
         * resets the object outside of the view port
         * @private
         * @method_reset
         * @returns {void}
         */
        Ocean.prototype._reset = function () {
            this.y = -960;
        };
        /**
         * checks if the object has reached its boundaries
         * @private
         * @method_checkbounds
         * @returns {void}
         *
         */
        Ocean.prototype._checkBounds = function () {
            if (this.y >= 0) {
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
        Ocean.prototype.start = function () {
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
        Ocean.prototype.update = function () {
            this.y += this._dy;
            this._checkBounds();
        };
        return Ocean;
    }(createjs.Bitmap));
    objects.Ocean = Ocean;
})(objects || (objects = {}));
//# sourceMappingURL=ocean.js.map