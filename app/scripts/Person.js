class Person {
  constructor(ship, id) {
    this.id = id;
    this.person = ship[id];
  }

  get name() {
    return this.person.name;
  }

  get heOrShe() {
    return this.person.gender === 'm' ? 'he' : 'she';
  }

  get himOrHer() {
    return this.person.gender === 'm' ? 'him' : 'her';
  }
}