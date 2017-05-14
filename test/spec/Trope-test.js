(function () {
  'use strict';

  const REAL_TROPES = Trope.TROPES;

  describe('Trope', () => {
    let type;
    let shipData;
    let id;
    let main;
    let secondary;

    function subject() {
      Trope.TROPES = {
        MAIN: [main],
        SECONDARY: [secondary],
      };

      const ship = new Ship();
      ship.id = 0;
      ship.personOne = new Person(shipData, 0);
      ship.personTwo = new Person(shipData, 1);

      return new Trope(type, ship, id);
    }

    afterEach(() => {
      Trope.TROPES = REAL_TROPES;
    });

    describe('given a type and a ship', () => {
      beforeEach(() => {
        type = Trope.MAIN;
        shipData = [{ name: 'Bob', gender: 'm' }, { name: 'Sally', gender: 'f' }];
      });

      describe('given a basic trope', () => { 
        beforeEach(() => {
          main = 'PERSON_1 says hi to PERSON_2';
          secondary = 'PERSON_2 also says hi to PERSON_1';
        });
        it('replaces the names', () => {
          expect(subject().text).to.equal('Bob says hi to Sally');
        });
        it('returns the id', () => {
          expect(subject().id).to.equal(0);
        });
      });

      describe('given a trope with pronouns', () => { 
        beforeEach(() => {
          type = Trope.SECONDARY;
          secondary = 'He_Or_She_2 has his_or_her_2 way with him_or_her_1';
        });
        it('replaces the pronouns', () => {
          expect(subject().text).to.equal('She has her way with him');
        });
      });
    });
  });
})();
