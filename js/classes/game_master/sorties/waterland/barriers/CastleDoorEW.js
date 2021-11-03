class CastleDoorEW extends Barrier {

    constructor() {
        super("Castle Door East West", "You must have password to pass!", "You are free to pass!")

        // create audio attribute like in StageManager
        this._teleporterSound = new Audio();
        this._teleporterSound.src = "sounds/open_door.mp3";
        this._teleporterSound.volume = .5;
    }

    // This will probably be the best way to make doors work
    // canPlayerPass = (player) => {
    //         // need the place in here? If boolean in place hasUnlockedDoorX = true;
    //         this._teleporterSound.play();
    //         if ( player.mapSquare.x === 43 ) {
    //             player.mapSquare = map[3][41];
    //             this.eventListener.trigger(GameMaster.EVENTS.PLAYER_UPDATED);
    //     let foundItems = CastleGreymoor.inputCodeOne;
    //     return {
    //         canPass: foundItems.length > 0,
    //         response: foundItems.length > 0 ? this._passMessageSlug : this._denyMessageSlug
    //     }
    // }

    clone = () => new CastleDoorEW(this._name, this._denyMessageSlug, this._passMessageSlug, this.imageName); // override
}
