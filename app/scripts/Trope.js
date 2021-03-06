const TROPES = {
  MAIN: [
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
    'Everyone is conspiring to get PERSON_1 and PERSON_2 together.',
    `PERSON_1 has a birthday and PERSON_2 doesn't notice, what with the whole "busy saving the world" thing.`,
    `PERSON_1 and PERSON_2 run into each other on Tindr. Oops.`,
    `PERSON_1 and PERSON_2 had a one-night stand, years ago. Now, they have to work together — but PERSON_2 doesn't seem to remember. This is awkward.`,
    `PERSON_1 and PERSON_2 are cellmates together. That doesn't mean they have to like it.`,
    `PERSON_1 is failing a class. PERSON_2 is his_or_her_1 tutor.`,
    `PERSON_1 is the star of the newest hit Broadway Musical. PERSON_2 is a very finicky reviewer. When they meet, sparks fly. AU.`,
    `PERSON_1 is sure his_or_her_1 senior year of high school is going to be just as predictable as the three years that preceded it. Then he_or_she_1 meets PERSON_2, who's from the wrong side of the tracks — suddenly, nothing seems so certain anymore. HS AU.`,
    `PERSON_1 and PERSON_2 are set up in an arranged marriage by their parents.`,
    `PERSON_1 is having a horrible day. Fortunately, PERSON_2 is there to pile on.`,
    `PERSON_1 is just trying to get to retirement peacefully. Unfortunately for him_or_her_1, PERSON_2 is his_or_her_1 partner.`,
  ],
  SECONDARY: [
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
    `PERSON_1 is NOT amused by his_or_her_1 new nickname.`,
    `Eventually, PERSON_1 gets a little tied up. By PERSON_2.`,
    `Non-traditional restraints make an appearance.`,
    `Most importantly, this is a Very Special Episode.`,
    `This is a musical episode.`,
    `And SOMEBODY forgot to wear underwear today.`,
    `Sex pollen makes an appearance.`,
    `Meanwhile, a sexy text goes awry.`,
    `The author is clearly uncomfortable with the word "cock".`,
    `Also, PERSON_2 likes being in trouble. I mean, realllllllyyy likes trouble.`,
    `Also, PERSON_1 is maybe just sliiiiightly lying about his_or_her_1 past?`,
    `Also, PERSON_2 is so not into this whole "rules" thing.`,
    `Someone dresses in drag.`,
    `Someone is in denial.`,
    `Someone might have a teensy thing for dirty talk.`,
    `Nobody expects the Spanish Inquisition.`,
  ]
};

class Trope {
  constructor(type, ship, id) {
    const tropes = Trope.TROPES[type];

    this._ship = ship;
    this._type = type;

    this.id = id || Utils.randomTo(tropes.length);
    this.text = this.personalize(ship);
  }

  personalize(ship) {
    let trope = this.getBaseTrope();
    trope = this.updateTrope(trope, 'PERSON_1', this._ship.personOne.name);
    trope = this.updateTrope(trope, 'he_or_she_1', this._ship.personOne.heOrShe);
    trope = this.updateTrope(trope, 'He_Or_She_1', this._ship.personOne.heOrShe, true);
    trope = this.updateTrope(trope, 'him_or_her_1', this._ship.personOne.himOrHer);
    trope = this.updateTrope(trope, 'his_or_her_1', this._ship.personOne.hisOrHer);
    trope = this.updateTrope(trope, 'PERSON_2', this._ship.personTwo.name);
    trope = this.updateTrope(trope, 'he_or_she_2', this._ship.personTwo.heOrShe);
    trope = this.updateTrope(trope, 'He_Or_She_2', this._ship.personTwo.heOrShe, true);
    trope = this.updateTrope(trope, 'him_or_her_2', this._ship.personTwo.himOrHer);
    trope = this.updateTrope(trope, 'his_or_her_2', this._ship.personTwo.hisOrHer);

    return trope;
  }

  updateTrope(trope, key, value, capitalize = false) {
    const regex = new RegExp(key, 'g');
    const replaceWithCapitalized = capitalize ? Utils.capitalize(value) : value;
    return trope.replace(regex, replaceWithCapitalized);
  }

  getBaseTrope() {
    return Trope.TROPES[this._type][this.id];
  }
  
}
Trope.MAIN = 'MAIN';
Trope.SECONDARY = 'SECONDARY';
Trope.TROPES = TROPES;
