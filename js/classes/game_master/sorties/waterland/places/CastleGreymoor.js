class CastleGreymoor extends MapPlace {

    _teleporterSound;

    constructor(sortie, layout, doors) { 
        super("greymoor", "The Castle of King Greymoor in Westfalia Kingdom", sortie, layout);
        

        // create all of our doors
        //let map = sortie._gameMaster.map.getMap();
        

        // create audio attribute like in StageManager
        this._teleporterSound = new Audio();
        this._teleporterSound.src = "sounds/open_door.mp3";
        this._teleporterSound.volume = .5;
    }

    // ######Completed Password "Ruler(13)EHYRE Absolute(16)QRIEBKJU Danburite(4)HERFYVMXI" 

    enter = (map, player) => {}

    move = (map, player) => {}


    



}