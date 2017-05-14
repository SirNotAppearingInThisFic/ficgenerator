(function () {
  'use strict';

  describe('PermaLink', () => {
    describe('#matchIds', () => {
      let query;

      function subject() {
        return PermaLink.matchIds(query);
      }

      describe('given a search query', () => {
        beforeEach(() => {
          query = '?idea=s1p0p1m1s1';
        });

        it('returns the ids', () => {
          expect(subject()).to.eql([1,0,1,1,1]);
        });
      });
    });
  });
})();


