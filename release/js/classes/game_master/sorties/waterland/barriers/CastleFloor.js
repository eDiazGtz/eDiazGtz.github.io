class CastleFloor extends Barrier {

    constructor() {
        super("castle floor")
    }

    canPlayerPass() {
        canPass: true;
    }

    clone (){
        return new CastleFloor();
    } 
}