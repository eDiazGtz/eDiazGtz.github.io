class MapPlaceLayout {

    coverImage;
    doors;
    drawingRanges;
    floorImage;
    wallBarrier;
    
    // -LESSON- add wall algo

    constructor(drawingRanges = [], doors = null, floorImage = null, wallBarrier = null, coverImage = null) {

        this.coverImage = coverImage;
        this.drawingRanges = drawingRanges;
        this.doors = doors;
        this.floorImage = floorImage;
        this.wallBarrier = wallBarrier;

        return this;
    }
}