module objects {
    /**THIS IS THE Island OBJECT USED IN THE GAME
     * 
     * @export
     * @class ocean
     * @extends {createjs.bitmap}
     */
    export class Island extends createjs.Bitmap {
        //PRIVATE INSTANCE VARIABLES
        private _dy:number;
        private _width:number;
        private _height:number;

        //public properties
        get width():number{

            return this._width;
        }

        set width(newWidth:number){
            this._width = newWidth;

        }

        get height():number {

            return this._height;

        }

        set height(newHeight:number){

            this._height = newHeight;
        }
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

            this.y = -this.height;

            //gets a random x axis
            this.x =Math.floor((Math.random() * (640 - (this.width *.5))) + (this.width * .5));
        }
/**
 * checks if the object has reached its boundaries
 * @private
 * @method_checkbounds
 * @returns {void}
 * 
 */
        private _checkBounds():void {
            if (this.y >= (480 + (this.height * .5))){

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
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this .regX = this.width *.5;
            this.regY = this.height *.5;

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