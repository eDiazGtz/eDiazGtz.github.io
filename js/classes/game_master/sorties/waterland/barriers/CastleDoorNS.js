class CastleDoorNS extends Barrier {

    constructor() {
        super("Castle Door North South", "You must have password to pass!", "You are free to pass!")
    }

    // This will probably be the best way to make doors work
    // canPlayerPass = (place) => {
    //     let foundItems = CastleGreymoor.inputCodeOne;

    //     return {
    //         canPass: foundItems.length > 0,
    //         response: foundItems.length > 0 ? this._passMessageSlug : this._denyMessageSlug
    //     }
    // }

    clone = () => new CastleDoorNS(this._name, this._denyMessageSlug, this._passMessageSlug, this.imageName); // override
}
