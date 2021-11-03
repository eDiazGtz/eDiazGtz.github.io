class CastleDoor extends MapPlaceDoor {

    solution;
    _intro_castle = false;
    
    constructor(point, solution) {
        super("castle_door", point, null, null, "greymore_castle_door");
        
        this.solution = solution;
    }
    
    canPlayerPass(map, player, candidateMapSquare) {
        

        if (this.point.x === 36 && this.point.y === 16 && player.mapSquare.y == 17) {
            if ( this._intro_castle === false) {
                // Hitting Main Door
                this.eventListener.trigger(
                    StageManager.EVENTS.DISPLAY_STORY,
                    new DialogObject(
                        DialogObject.DIALOG_TYPES.SCRIPT,
                        this._sortie.getScript("the_castle_main_door") //_sortie undefined need from quest
                    )
                )
                player.mapSquare = map[3][45];
                this.eventListener.trigger(GameMaster.EVENTS.MAP_UPDATED);
                this.eventListener.trigger(
                    StageManager.EVENTS.DISPLAY_STORY,
                    new DialogObject(
                        DialogObject.DIALOG_TYPES.SCRIPT,
                        this._sortie.getScript("captured")  //_sortie undefined need from quest
                    )
                )
            } else {
                this._handleBasicDeny(candidateMapSquare);
            }
        } else {
            this._handleBasicDeny(candidateMapSquare);
        }


        return {
            canPass: false
        }
    }

    // override
    clone() {
        return new CastleDoor(this._name, this._denyMessageSlug, this._passMessageSlug, this.imageName);
    }

    _handleBasicDeny = (candidateMapSquare) => {
        this.eventListener.trigger(
            StageManager.EVENTS.DISPLAY_DIALOG,
            new DialogObject(
                DialogObject.DIALOG_TYPES.INPUT,
                new ScriptLine("Enter the code:"),
                (input) => {



                    if (input === this.solution) {
                        candidateMapSquare.barrier = null;
                        this.eventListener.trigger(StageManager.EVENTS.DISPLAY_DIALOG, new DialogObject(DialogObject.DIALOG_TYPES.CLEAR))
                        this.eventListener.trigger(GameMaster.EVENTS.MAP_UPDATED);
                    } else {
                        this.eventListener.trigger(
                            StageManager.EVENTS.DISPLAY_DIALOG,
                            new DialogObject(
                                DialogObject.DIALOG_TYPES.ONE_OFF,
                                new ScriptLine("incorrect")
                            )
                        )
                    }
                }
            )
        )
    }
}