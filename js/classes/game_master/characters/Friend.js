class Friend extends Character {
    
    constructor(name, race, strength, maxStrength, agility, magic, description) {
        super(name, race, strength, maxStrength, agility, magic, description);

        this.imageName = `enemy_${race} ${name}`.split(" ").join("_");

        this.gold = Tools.generateRandomNumber(0, 10);
        this.displayName = `${this.name} ${this.race}`;
    }

    clone = () => new Friend(this.name, this.race, this.strength, this.maxStrength, this.agility, this.magic, this.description);
}