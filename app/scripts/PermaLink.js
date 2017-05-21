const URL = 'https://sirnotappearinginthisfic.github.io/ficgenerator/';

class PermaLink {
  static fromUrl() {
    const query = location.search;
    return this.parseQuery(query);
  }
 
  static toLink(ship, idea) {
    const queryParams = PermaLink.toQueryParams(ship, idea);

    return `${URL}${queryParams}`;
  }

  static toQueryParams(ship, idea) {
    if (!ship || ship.id === undefined) return;

    const shipId = ship.id;
    const personOneId = ship.personOne.id;
    const personTwoId = ship.personTwo.id;
    const mainTropeId = idea.mainTrope.id;
    const secondaryTropeId = idea.secondaryTrope.id;

    return `?idea=s${ship.id}p${personOneId}p${personTwoId}m${mainTropeId}s${secondaryTropeId}`;
  }

  static parseQuery(query) {
    const matches = this.matchIds(query);
    
    if (!matches) return;

    const [shipId, personOneId, personTwoId, mainTropeId, secondaryTropeId] = matches;

    const ship = new Ship(shipId, personOneId, personTwoId);
    const idea = new Idea(ship, mainTropeId, secondaryTropeId);

    return { ship, idea };
  }

  static matchIds(query) {
    const matches = query.match(/\?idea=s(\d+)p(\d+)p(\d+)m(\d+)s(\d+)$/);

    if (matches) {
      return matches.slice(1).map(id => parseInt(id));
    }
  }
}