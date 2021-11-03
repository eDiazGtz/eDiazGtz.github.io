class GreenSerpentLake extends Water {

    static tresspassCount = 0;

    constructor() {
        super(null, "green_serpant_lake_warning");
    }

    canPlayerPass = (gameMaster) => {
        
        GreenSerpantLake.tresspassCount ++;

        if ( GreenSerpantLake.tresspassCount === 1 )
            return {
                canPass: true,
                response: this._passMessageSlug
            }
        
        // each time player trespasses past the first one, they will lose strength
        let hitLoss = Tools.rollDie(3) + GreenSerpantLake.tresspassCount;
        
        gameMaster.player.strength -= hitLoss;

        return {
            canPass: true,
            response: new DialogObject(
                DialogObject.DIALOG_TYPES.ONE_OFF,
                new ScriptLine(
                    `You were attacked by GREEN SERPANTS and lost ${hitLoss} strength!`
                )
            )
        }
    }

    clone = () => new GreenSerpentLake(this._name, this._denyMessageSlug, this._passMessageSlug, this.imageName);
}