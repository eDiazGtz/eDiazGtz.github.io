class TestQuest extends Quest {

    constructor(sortie, name = "test_quest") {
        super(name, sortie, new Point(0,0), [
            new CollectableMapItem("test_collectable_item", "")
        ]);
    }

    end(map, player) {
        this.eventListener.trigger("quest_end");
    }

    start(map, player) {
        this.eventListener.trigger("quest_start");
    }

    update(map, player) {
        this.eventListener.trigger("quest_update");
        return super.update(map, player);
    }
}