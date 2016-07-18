module objects {
    /**This is the Player object used in the game
     * 
     * 
     */
    export class Player extends createjs.Bitmap {
        //PRIVATE INSTANCE VARIABLES

        private _width: number;
        private _height: number;

        //public properties
        get width(): number {

            return this._width;
        }

        set width(newWidth: number) {
            this._width = newWidth;

        }

        get height(): number {

            return this._height;

        }

        set height(newHeight: number) {
        }
        /**
         * CONSTRUCTORS++++++++++++++++++++++++++++++
         * creates an instance of Player
         */
        constructor(imageString: string) {
            super(core.assets.getResult(imageString));
            this.start();

        }

        private _checkBounds(): void {
            //checkbounds to stop player from going outside
            // check right bounds
            if(this.x >= (640 -( this.width *.5))){

                this.x = (640 -( this.width *.5));
            }
            // check left bounds
            if(this.x <= (0 + (this.width * .5))){

                this.x =  (0 + (this.width * .5));
            }


        }

        public start(): void {
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.regX = this.width * .5;
            this.regY = this.height * .5;

        }
        public update(): void {

            this.x = core.stage.mouseX;
            this._checkBounds();

        }
    }
}