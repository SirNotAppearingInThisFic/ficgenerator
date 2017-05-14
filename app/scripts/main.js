const ships = [
  ['Sherlock', 'John']
];

const mainTropes = [
  'Person1 and Person2 have to pretend to be in a relationship.'
];

const secondaryTropes = [
  'Unexpectedly, somebody has tentacles.'
];


class FicGenerator {
  constructor($) {
    this.$shipSelector = $('#ship-selector');
    this.$goButton = $('#go');
    this.$mainTrope = $('#main-trope');
    this.$secondaryTrope = $('#secondary-trope');

    this.setupShips();
  }

  setupShips() {
    console.log(ships);
    ships
      .map(this.shipOption)
      .forEach(option => this.$shipSelector.append(option));
  }

  shipOption(ship, id) {
    const shipDisplay = ship.join('/')
    return `<option value="${id}">${shipDisplay}</option>`;
  }

  generateIdea() {

  }
}

jQuery(function ($) {
  new FicGenerator($);
});