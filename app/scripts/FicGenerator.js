class FicGenerator {
  constructor($) {
    this.$shipSelector = $('#ship-selector');
    this.$goButton = $('#go');
    this.$mainTrope = $('#main-trope');
    this.$secondaryTrope = $('#secondary-trope');
    this.$link = $('#link');
    this.$linkContainer = $('#link-container');

    this.ship = undefined;
    this.idea = undefined;

    this.setupShips();
    this.firstIdea();

    this.$goButton.click(this.onGo.bind(this));
    window.addEventListener('popstate', (event) => {
      this.firstIdea();
    });
  }

  setupShips() {
    Ship.all
      .map(this.shipOption)
      .forEach(option => this.$shipSelector.append(option));
  }

  onGo() {
    this.generateIdea();
  }

  shipOption(ship, id) {
    const shipDisplay = ship.map(person => person.name).join('/')
    return `<option value="${id}">${shipDisplay}</option>`;
  }

  generateIdea() {
    const shipId = this.$shipSelector.val();

    if (shipId === "") {
      this.ship = new Ship();
      this.idea = Idea.blank();
    } else {
      this.ship = new Ship(parseInt(shipId));
      this.idea = new Idea(this.ship);
    }

    this.renderIdea();
    this.updateHistory();
  }

  renderIdea() {
    this.$mainTrope.text(this.idea.mainTrope.text);
    this.$secondaryTrope.text(this.idea.secondaryTrope.text);
    this.renderLink();
  }

  renderLink() {
    if (this.idea.isBlank) {
      this.$link.text();
      this.$link.attr('href', '');
      this.$linkContainer.addClass('hidden');
    } else {
      const link = PermaLink.toLink(this.ship, this.idea)

      this.$link.text(link);
      this.$link.attr('href', link);
      this.$linkContainer.removeClass('hidden');
    }
  }

  updateHistory() {
    history.pushState(null, null, PermaLink.toQueryParams(this.ship, this.idea));
  }

  firstIdea() {
    const queryChoices = PermaLink.fromUrl();

    if (queryChoices) {
      const { ship, idea } = queryChoices;

      this.ship = ship;
      this.idea = idea;

      this.chooseShip(ship);
      this.renderIdea(idea);
    } else {
      this.generateIdea();
    }
  }

  chooseShip(ship) {
    this.$shipSelector.val(ship.id);
  }
}