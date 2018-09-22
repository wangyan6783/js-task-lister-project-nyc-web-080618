const allData = {};
const allLists = [];
class List {
  constructor(title) {
    this.title = title;
    allData[title] = [];
    allLists.push(this);
  }

  render() {
    return `
      <h2>${this.title}
        <button data-title="${this.title}" class="delete-list">
          X
        </button>
      </h2>
      <ul>
      </ul>
    `
  }
}
