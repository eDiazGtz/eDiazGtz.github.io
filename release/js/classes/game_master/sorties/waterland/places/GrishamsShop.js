class GrishamsShop extends Shop {

    constructor(availableItems, sortie) {
        super (availableItems, "Grisham's Shop", "", sortie,
        new MapPlaceLayout(
            [
                new Range(new Point(40,40), new Point(45, 45))
            ],[] , "map_item_shop_floor", null, "map_item_shop_roof"
        ));
    };

    enter = (map, player) => {
        super.enter(map, player);

        let collectedHeirloom = this._checkForHeirloom(player);
        let collectedScroll = this._checkForScroll(player);

        // check if player has Grisham's Heirloom
        if ( collectedScroll !== null ) {
            this.eventListener.trigger(StageManager.EVENTS.GO_SHOPPING);
            this.eventListener.trigger(
                StageManager.EVENTS.DISPLAY_DIALOG,
                    new DialogObject(
                        DialogObject.DIALOG_TYPES.SCRIPT, 
                        this._sortie.getScript("post_magic_grisham_shop")
                    )
                )
            return true;
        // // check if player has Grisham's Heirloom
        // if ( collectedHeirloom !== null ) {
        //     this.eventListener.trigger(StageManager.EVENTS.GO_SHOPPING);
        //     this.eventListener.trigger(
        //         StageManager.EVENTS.DISPLAY_DIALOG,
        //             new DialogObject(
        //                 DialogObject.DIALOG_TYPES.SCRIPT, 
        //                 this._sortie.getScript("post_magic_grisham_shop")
        //             )
        //         )
        //     return true;

        } else if ( collectedScroll !== null && this._playerEnterCount > 1 ) {// returning without scroll
            this.eventListener.trigger(
                StageManager.EVENTS.DISPLAY_DIALOG,
                    new DialogObject(
                        DialogObject.DIALOG_TYPES.SCRIPT, 
                        this._sortie.getScript("rejecting_learning_magic_at_grishams")
                    )
                )
        // } else if ( collectedHeirloom !== null && this._playerEnterCount > 1 ) {// returning without heirloom
        //     this.eventListener.trigger(
        //         StageManager.EVENTS.DISPLAY_DIALOG,
        //             new DialogObject(
        //                 DialogObject.DIALOG_TYPES.SCRIPT, 
        //                 this._sortie.getScript("rejecting_learning_magic_at_grishams")
        //             )
        //         )

        } else if ( this._playerEnterCount === 1 ) {// first time
            this.eventListener.trigger(
                StageManager.EVENTS.DISPLAY_STORY,
                    new DialogObject(
                        DialogObject.DIALOG_TYPES.SCRIPT, 
                        this._sortie.getScript(this.name),
                        () => {
                            this.eventListener.trigger(StageManager.EVENTS.SET_ACT, StageManager.ACTS.TRAVELING)
                            this._confirmLearnMagic(player)
                        }
                    )
                )
        } else { // check for Grisham's Heirloom
            this._confirmLearnMagic(player);
        }

        return true;
    };

    move = (map, player) => {
        super.move(map, player);

        // if player has not completed magic, they will be asked to every 3 steps
        if ( this._stepsInPlace % 3 === 0 ) 
            this._confirmLearnMagic(player);

    }

    _checkForHeirloom = (player) => player.collectedItems.searchForItemByName(new GrishamsHeirloom().name);
    _checkForScroll = (player) => player.collectedItems.searchForItemByName(new AncientMagicScroll().name);

    _confirmLearnMagic = (player) => {

        // check if the player has Grishams's Heirloom
        if ( this._checkForScroll(player) === null ) {

            if ( this._playerEnterCount === 1 ) { // if first time entering 
                this.eventListener.trigger( 
                    StageManager.EVENTS.DISPLAY_DIALOG,
                    new DialogObject(
                        DialogObject.DIALOG_TYPES.SCRIPT,
                        this._sortie.getScript("accepting_to_learn_magic_at_grishams"),
                        () => this._confirmLearnMagic(player)
                        )
                )
            } else {
        // if ( this._checkForHeirloom(player) === null ) {

        //     if ( this._playerEnterCount === 1 ) { // if first time entering 
        //         this.eventListener.trigger( 
        //             StageManager.EVENTS.DISPLAY_DIALOG,
        //             new DialogObject(
        //                 DialogObject.DIALOG_TYPES.SCRIPT,
        //                 this._sortie.getScript("accepting_to_learn_magic_at_grishams"),
        //                 () => this._confirmLearnMagic(player)
        //                 )
        //         )
        //     } else {

            }
            this.eventListener.trigger( // if not, ask if the player would like to learn.
                StageManager.EVENTS.DISPLAY_DIALOG,
                new DialogObject(
                    DialogObject.DIALOG_TYPES.CONFIRM,
                    new ScriptLine(
                        "Are you ready to learn to harness magic?",
                        "codee"
                    ),
                    (dialogResponse) => {
                        if ( dialogResponse === "dialog.yes" ) {
                            if ( ! LessonMaster.presentLesson("grishams_heirloom", 
                                    StageManager.ACTS.TRAVELING, this._handleLessonSkipped) ) {
                                        this.eventListener.trigger(
                                            StageManager.EVENTS.DISPLAY_STORY,
                                            new DialogObject (
                                                DialogObject.DIALOG_TYPES.SCRIPT,
                                                this._sortie.getScript("accepting_to_learn_magic_at_grishams")
                                            )
                                        )
                                    }
                        } else {
                            this.eventListener.trigger(
                                StageManager.EVENTS.DISPLAY_DIALOG,
                                new DialogObject (
                                    DialogObject.DIALOG_TYPES.SCRIPT,
                                    this._sortie.getScript("rejecting_learning_magic_at_grishams")
                                )
                            )
                        }
                    } 
                )
            )
        } else {

        }
    }

    _handleLessonSkipped = (map, player) => {
        player.collectedItems.addItem(new AncientMagicScroll());
        this.eventListener.trigger(GameMaster.EVENTS.PLAYER_UPDATED);
        this._sortie._gameMaster.gotoNextQuest();
    }
}