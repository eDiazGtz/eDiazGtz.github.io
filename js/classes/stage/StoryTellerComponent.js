class StoryTellerComponent extends StageComponent {
    
    static SCENES = {
        BEGIN_JOURNEY: "begin_journey",
        DIALOG: "dialog",
        INTRO: "intro"
    }

    _dialogComponent;

    constructor(stage, gameMaster) {
        super(stage, gameMaster);

        this._dialogComponent = new DialogComponent(this._stage.querySelector("#dialog__scene"), gameMaster);

        // events
        this._attachEvent("#skip_dialog_btn", "click", () => this._dialogComponent.endDialog());

    }

    buildComponent = (dialogObject) => {

        if ( dialogObject ) this._dialogComponent.displayDialog(dialogObject);
    }
}