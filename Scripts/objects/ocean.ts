module objects {
    /**THIS IS THE OCEAN OBJECT USED IN THE GAME
     * 
     * @export
     * @class ocean
     * @extends {createjs.bitmap}
     */
    export class Ocean extends createjs.Bitmap {
        //PRIVATE INSTANCE VARIABLES
        private _dy:number;
//CONSTRUCTORS +++++++++++++++++++++++
/**
 * creates and instance of the ocean
 * @constructor
 * @param {string}
 * 
 */
        constructor(imageString: String) {
            super(core.assets.getResult(imageString));

            this.start();
        }
        /**
         * 
         * resets the object outside of the view port
         * @private
         * @method_reset
         * @returns {void}
         */

        private _reset():void {

            this.y = -960;
        }
/**
 * checks if the object has reached its boundaries
 * @private
 * @method_checkbounds
 * @returns {void}
 * 
 */
        private _checkBounds():void {
            if (this.y >=0){

                this._reset();
            }

        }

    // METHODS+++++++++++++++++++++++++++++++++++++++

        /**
         * 
         * this method is used to initialize public properties and private instance variables
         * @public
         * @method start@returns {void}
         */
        public start():void {
        this._reset();
        this._dy = 5; // px per frame
        }
        /**
         * 
         * this method updates the onject every frame
         * 
         * @public 
         * @method update
         * @returns {void}
         * 
         */
        public update():void {

            this.y += this._dy;
            this._checkBounds();
        }
    }

}