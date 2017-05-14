(function () {
  'use strict';

  describe('Person', () => {
    let ship;
    let id;

    function subject() {
      return new Person(ship, id)
    }

    beforeEach(() => {
      ship = [{ name: 'Bob', gender: 'm' }, { name: 'Sally', gender: 'f' }];
      id = 0;
    });

    it('returns the name', () => {
      expect(subject().name).to.equal('Bob');
    });

    describe('given a male', () => {
      beforeEach(() => {
        id = 0;
      });

      it('returns he for heOrShe', () => {
        expect(subject().heOrShe).to.equal('he');
      });
      it('returns him for himOrHer', () => {
        expect(subject().himOrHer).to.equal('him');
      });
      it('returns his for hisOrHer', () => {
        expect(subject().hisOrHer).to.equal('his');
      });
    });
  });
})();

