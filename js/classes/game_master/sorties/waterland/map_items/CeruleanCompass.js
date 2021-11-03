class CeruleanCompass extends MagicalMapItem {

    constructor(mapPoint) {
        super("Cerulean Compass", "", mapPoint);
    }

    use(map, player) {

        if ( LessonMaster.presentLesson("cerulean_compass", StageManager.ACTS.BUILD_PLAYER) ) return;

        for ( let y = 0; y < map.length; y ++ ) {
            for ( let x = 0; x < map.length; x ++ ) {
            }
        }
    }
}