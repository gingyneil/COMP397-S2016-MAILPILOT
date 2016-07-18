var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    /**This is the Player object used in the game
     *
     *
     */
    var Player = (function (_super) {
        __extends(Player, _super);
        /**
         * CONSTRUCTORS++++++++++++++++++++++++++++++
         * creates an instance of Player
         */
        function Player(imageString) {
            _super.call(this, core.assets.getResult(imageString));
            this.start();
        }
        Object.defineProperty(Player.prototype, "width", {
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
        Object.defineProperty(Player.prototype, "height", {
            get: function () {
                return this._height;
            },
            set: function (newHeight) {
            },
            enumerable: true,
            configurable: true
        });
        Player.prototype._checkBounds = function () {
            //checkbounds to stop player from going outside
            // check right bounds
            if (this.x >= (640 - (this.width * .5))) {
                this.x = (640 - (this.width * .5));
            }
            // check left bounds
            if (this.x <= (0 + (this.width * .5))) {
                this.x = (0 + (this.width * .5));
            }
        };
        Player.prototype.start = function () {
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.regX = this.width * .5;
            this.regY = this.height * .5;
        };
        Player.prototype.update = function () {
            this.x = core.stage.mouseX;
            this._checkBounds();
        };
        return Player;
    }(createjs.Bitmap));
    objects.Player = Player;
})(objects || (objects = {}));
//# sourceMappingURL=player.js.map