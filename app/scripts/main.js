const SHIPS = [
  ['Sherlock', 'John']
];

const MAIN_TROPES = [
  'Person1 and Person2 have to pretend to be in a relationship.',
];

const SECONDARY_TROPES = [
  'Unexpectedly, somebody has tentacles.'
];

class Utils {
  static sample(array) {
    const random = Math.random();
    const index = Math.floor(random * array.length);
    return array[index];
  }

  static shufflePair(pair) {
    const random = Math.random();
    const firstIndex = Math.floor(random * 2);
    const secondIndex = (firstIndex + 1) % 2;

    return [pair[firstIndex], pair[secondIndex]];
  }
}

class Idea {
  constructor(ship) {
    this.ship = ship;
    this.mainTrope = this.generateTrope(MAIN_TROPES);
    this.secondaryTrope = this.generateTrope(SECONDARY_TROPES);
  }

  generateTrope(tropes) {
    let trope = Utils.sample(tropes);
    trope = trope.replace('Person1', this.ship.personOne);
    trope = trope.replace('Person2', this.ship.personTwo);

    return trope;
  }
}

class Ship {
  constructor(id) {
    this.ship = Utils.shufflePair(SHIPS[id]);
  }

  get personOne() {
    return this.ship[0];
  }

  get personTwo() {
    return this.ship[1];
  }
}

class FicGenerator {
  constructor($) {
    this.$shipSelector = $('#ship-selector');
    this.$goButton = $('#go');
    this.$mainTrope = $('#main-trope');
    this.$secondaryTrope = $('#secondary-trope');

    this.setupShips();
    this.$goButton.click(this.generateIdea.bind(this));
  }

  setupShips() {
    SHIPS
      .map(this.shipOption)
      .forEach(option => this.$shipSelector.append(option));
  }

  shipOption(ship, id) {
    const shipDisplay = ship.join('/')
    return `<option value="${id}">${shipDisplay}</option>`;
  }

  generateIdea() {
    const shipId = this.$shipSelector.val();
    if (!shipId) return;

    const ship = new Ship(parseInt(shipId));
    const idea = new Idea(ship);

    this.$mainTrope.text(idea.mainTrope);
    this.$secondaryTrope.text(idea.secondaryTrope);
  }
}

jQuery(function ($) {
  new FicGenerator($);
});