const SHIPS = [
  ['Sherlock', 'John'],
  ['Steve', 'Tony'],
  ['Han Solo', 'Princess Leia'],
  ['Kirk', 'Spock'],
  ['Natasha', 'Bruce'],
  ['Starlord', 'Gamora'],
];

const MAIN_TROPES = [
  'Person1 and Person2 have to pretend to be in a relationship.',
  'Person1 and Person2 have to share a bed.',
  'Person1 and Person2 wind up in a Canadian shack.',
  'Person1 has a nightmare.  Person2 wakes them up. ',
  'Somebody gives Person1 the shovel talk about Person2. ',
  'AU: Person1 runs a coffee shop where Person2 is a regular.',
  'Person1 grows a mustache.  Person2 is not a fan.',
  'Person1 gets de-aged. Is this really part of Person2\'s job description?',
  'Person1 & Person2: Aliens or bad guys made them do it.',
  'Person1 and Person2 must fuck or they will die.',
  'Person1 is in handcuffs.  Person2 has the key.',
  'Person1 gets really, really drunk... and gets a little too honest with Person2.',
  'Person1 and Person2 do something even more domestic than pick out curtains.',
  'Person1 and Person2 are on the run from the law.',
  'Person1 isn\'t speaking to Person2.  They know what they did.',
  'Person1 is pretending to be in a relationship to make Person2 jealous. (It\'s successful.)',
  'Person1 patches up Person2 after an adventure gone wrong.',
  'Person1 gets amnesia.  Person2 has a lot of Feelings about it. ',
  'Person1 and Person2 accidentally swap bodies.',
  'Person1 gets turned into a kitten.  Is this really part of Person2\'s job description?',
  'Person1 and Person2 are from the 50\'s.  Who doesn\'t look great in a leather jacket?',
  'Person1 is on the road to becoming a villain.  Only Person2 can bring them back from the brink.',
  'Person1 and Person2 wake up in bed together... and they\'re not sure what happened last night.',
  'Person1 and Person2 get up to some shenanigans in public.',
  'Everyone thinks Person1 and Person2 are dating.  What is up with THAT?!',
  'Everyone\'s friends are conspiring to get Person1 and Person2 together.'
];

const SECONDARY_TROPES = [
  'Unexpectedly, somebody has tentacles.',
  `Person2 has had an erection for more than four hours.`,
  `Plus, it turns out that Person1 really likes to be spanked.`,
  `They also go to a Beyonce concert.`,
  `Everybody is, for some reason, a werewolf.`,
  `There is a nonzero amount of voyeurism.`,
  `A breeding stand is involved.  You decide how. And why.`,
  `Two words: Nipple Clamps.`,
  `Plus, it turns out Person1 really likes to be called Daddy.`,
  `Unrelatedly, Person2 is wearing a chastity belt.`,
  `Plus, it turns out Person2 is really into cross-dressing.`,
  `The handcuffs were official at first.  Later, they're just for fun.`,
  `A dildo makes a surprise guest appearance.`,
  `Somebody engages in phone sex.`,
  `Creator chose not to use archive warnings.`,
  `Unexpectedly, someone is a virgin.`,
  `One rule: no hands.`,
  `Person1 is NOT amused by their new nickname.`,
  `Eventually, Person1 gets a little tied up.  By Person2.`,
  `Non-traditional restraints make an appearance.`,
  `Most importantly, this is a Very Special Episode.`,
  `This is a musical episode.`,
  `And SOMEBODY forgot to wear underwear today.`,
  `Sex pollen makes an appearance.`,
  `Meanwhile, a sexy text goes awry.`,
  `The author is clearly uncomfortable with the word "cock".`,
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