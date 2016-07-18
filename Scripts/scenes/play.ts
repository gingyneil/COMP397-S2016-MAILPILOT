module scenes {
    export class Play extends objects.Scene {
        //  PRIVATE INSTANCE VARIABLES
      private _ocean: objects.Ocean;
      private _island: objects.Island;

        /**
         * Creates an instance of Menu.
         * 
         */
        constructor() {
            super();
        }

        /**
         * 
         */
        public Start():void {
            // Add Menu Label
           
            this._ocean = new objects.Ocean("ocean");
            this.addChild(this._ocean);

            this._island = new objects.Island("island");
            this.addChild(this._island);
        

            // add this scene to the global scene container
            core.stage.addChild(this);
        }

        public Update():void {
            // scene updates happen here...
            this._ocean.update();
            this._island.update();
        }

        // EVENT HANDLERS ++++++++++++++++

        private _startButtonClick(event:createjs.MouseEvent):void {
            // Switch the scene
            core.scene = config.Scene.OVER;
            core.changeScene();
        }
    }
}