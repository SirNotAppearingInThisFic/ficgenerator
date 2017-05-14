const SHIPS = [
  [{ name: 'Sherlock', gender: 'm' }, { name: 'John', gender: 'm' }],
  [{ name: 'Steve', gender: 'm' }, { name: 'Tony', gender: 'm' }],
  [{ name: 'Han Solo', gender: 'm' }, { name: 'Princess Leia', gender: 'f' }],
  [{ name: 'Kirk', gender: 'm' }, { name: 'Spock', gender: 'm' }],
  [{ name: 'Natasha', gender: 'f' }, { name: 'Bruce', gender: 'm' }],
  [{ name: 'Starlord', gender: 'm' }, { name: 'Gamora', gender: 'f' }],
];

class Ship {
  constructor(id, personOneId, personTwoId) {
    if (!id) return;
    personOneId = personOneId || Utils.randomTo(2);
    personTwoId = personTwoId || (personOneId + 1) % 2

    const ship = SHIPS[id];

    this.id = id;
    this.personOne = new Person(ship, personOneId);
    this.personTwo = new Person(ship, personTwoId);
  }

  static get all() {
    return SHIPS;
  }
}
