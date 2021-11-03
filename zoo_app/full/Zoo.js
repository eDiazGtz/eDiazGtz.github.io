const Animal = require('./Animal.js');
const ConsessionsEmployee = require('./ConsessionsEmployee.js');
const ConsessionsManager = require('./ConsessionsManager.js');
const Visitor = require('./Visitor.js');
const Zebra = require('./Zebra.js');

class Zoo {

    _consessionsEmployee;
    _consessionsManager;

    animals;

    constructor(animals) {

        this.animals = animals;

        this._consessionsManager = new ConsessionsManager("Chuck", null, true);
        this._consessionsEmployee = new ConsessionsEmployee("Fred", this._consessionsManager);
    }

    atConsessions = (visitor) => {

        this._consessionsEmployee.interactWithVisitor(visitor);
    }
}

module.exports = Zoo;