class Idea {
  constructor(ship, mainTropeId, secondaryTropeId) {
    if (!ship) return;

    self.isBlank = false;
    this.ship = ship;
    this.mainTrope = new Trope(Trope.MAIN, ship, mainTropeId);
    this.secondaryTrope = new Trope(Trope.SECONDARY, ship, secondaryTropeId);
  }

  static blank() {
    const self = new Idea();

    self.isBlank = true;
    self.ship = {};
    self.mainTrope = { text: 'Choose a ship,' };
    self.secondaryTrope = { text: 'hit the button, and get inspired!' };

    return self;
  }
}