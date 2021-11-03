class MagicalMapItem extends CollectableMapItem {

    constructor(name, description, mapPoint) {
        super(name, description, mapPoint);
    }

    // override
    use(map, player){}
}