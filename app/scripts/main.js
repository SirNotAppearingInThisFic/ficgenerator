const SHIPS = [
  [{ name: 'Sherlock', gender: 'm' }, { name: 'John', gender: 'm' }],
  [{ name: 'Steve', gender: 'm' }, { name: 'Tony', gender: 'm' }],
  [{ name: 'Han Solo', gender: 'm' }, { name: 'Princess Leia', gender: 'f' }],
  [{ name: 'Kirk', gender: 'm' }, { name: 'Spock', gender: 'm' }],
  [{ name: 'Natasha', gender: 'f' }, { name: 'Bruce', gender: 'm' }],
  [{ name: 'Starlord', gender: 'm' }, { name: 'Gamora', gender: 'f' }],
];

const MAIN_TROPES = [
  'PERSON_1 and PERSON_2 have to pretend to be in a relationship.',
  'PERSON_1 and PERSON_2 have to share a bed.',
  'PERSON_1 and PERSON_2 wind up in a Canadian shack.',
  'PERSON_1 has a nightmare. PERSON_2 wakes him_or_her_1 up. ',
  'Somebody gives PERSON_1 the shovel talk about PERSON_2. ',
  'AU: PERSON_1 runs a coffee shop where PERSON_2 is a regular.',
  'PERSON_1 grows a mustache. PERSON_2 is not a fan.',
  'PERSON_1 gets de-aged. Is this really part of PERSON_2\'s job description?',
  'PERSON_1 & PERSON_2: Aliens or bad guys made them do it.',
  'PERSON_1 and PERSON_2 must fuck or they will die.',
  'PERSON_1 is in handcuffs. PERSON_2 has the key.',
  'PERSON_1 gets really, really drunk... and gets a little too honest with PERSON_2.',
  'PERSON_1 and PERSON_2 do something even more domestic than pick out curtains.',
  'PERSON_1 and PERSON_2 are on the run from the law.',
  'PERSON_1 isn\'t speaking to PERSON_2. He_Or_She_1 knows what he_or_she_1 did.',
  'PERSON_1 is pretending to be in a relationship to make PERSON_2 jealous. (It\'s successful.)',
  'PERSON_1 patches up PERSON_2 after an adventure gone wrong.',
  'PERSON_1 gets amnesia. PERSON_2 has a lot of Feelings about it. ',
  'PERSON_1 and PERSON_2 accidentally swap bodies.',
  'PERSON_1 gets turned into a kitten. Is this really part of PERSON_2\'s job description?',
  'PERSON_1 and PERSON_2 are from the 50\'s. Who doesn\'t look great in a leather jacket?',
  'PERSON_1 is on the road to becoming a villain. Only PERSON_2 can bring him_or_her_1 back from the brink.',
  'PERSON_1 and PERSON_2 wake up in bed together... and they\'re not sure what happened last night.',
  'PERSON_1 and PERSON_2 get up to some shenanigans in public.',
  'Everyone thinks PERSON_1 and PERSON_2 are dating. What is up with THAT?!',
  'Everyone\'s friends are conspiring to get PERSON_1 and PERSON_2 together.'
];

const SECONDARY_TROPES = [
  'Unexpectedly, somebody has tentacles.',
  `PERSON_2 has had an erection for more than four hours.`,
  `Plus, it turns out that PERSON_1 really likes to be spanked.`,
  `They also go to a Beyonce concert.`,
  `Everybody is, for some reason, a werewolf.`,
  `There is a nonzero amount of voyeurism.`,
  `A breeding stand is involved. You decide how. And why.`,
  `Two words: Nipple Clamps.`,
  `Plus, it turns out PERSON_1 really likes to be called Daddy.`,
  `Unrelatedly, PERSON_2 is wearing a chastity belt.`,
  `Plus, it turns out PERSON_2 is really into cross-dressing.`,
  `The handcuffs were official at first. Later, they're just for fun.`,
  `A dildo makes a surprise guest appearance.`,
  `Somebody engages in phone sex.`,
  `Creator chose not to use archive warnings.`,
  `Unexpectedly, someone is a virgin.`,
  `One rule: no hands.`,
  `PERSON_1 is NOT amused by their new nickname.`,
  `Eventually, PERSON_1 gets a little tied up. By PERSON_2.`,
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

  static capitalize(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
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
    trope = this.updateTrope(trope, 'PERSON_1', this.ship.personOne.name);
    trope = this.updateTrope(trope, 'he_or_she_1', this.ship.personOne.heOrShe);
    trope = this.updateTrope(trope, 'He_Or_She_1', this.ship.personOne.heOrShe, true);
    trope = this.updateTrope(trope, 'him_or_her_1', this.ship.personOne.himOrHer);
    trope = this.updateTrope(trope, 'PERSON_2', this.ship.personTwo.name);
    trope = this.updateTrope(trope, 'he_or_she_2', this.ship.personTwo.heOrShe);
    trope = this.updateTrope(trope, 'He_Or_She_2', this.ship.personTwo.heOrShe, true);
    trope = this.updateTrope(trope, 'him_or_her_2', this.ship.personTwo.himOrHer);

    return trope;
  }

  updateTrope(trope, key, value, capitalize = false) {
    const regex = new RegExp(key, 'g');
    const replaceWithCapitalized = capitalize ? Utils.capitalize(value) : value;
    return trope.replace(regex, replaceWithCapitalized);
  }
}

class Person {
  constructor(person) {
    this.data = person;
  }

  get name() {
    return this.data.name;
  }

  get heOrShe() {
    console.log('HE OR SHE', this.data.gender);
    return this.data.gender === 'm' ? 'he' : 'she';
  }

  get himOrHer() {
    return this.data.gender === 'm' ? 'him' : 'her';
  }
}

class Ship {
  constructor(id) {
    this.ship = Utils.shufflePair(SHIPS[id]);
    this.personOne = new Person(this.ship[0]);
    this.personTwo = new Person(this.ship[1]);
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
    const shipDisplay = ship.map(person => person.name).join('/')
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