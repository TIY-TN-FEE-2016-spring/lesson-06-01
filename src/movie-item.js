export default class MovieItem {
  constructor(movieInfo, app) {
    this.movieInfo = movieInfo;
    this.app = app;

    this.el = document.createElement(`li`);
    this.el.classList.add(`movie-item`);

    this.createTemplate();
    this.render();
    this.listenForDelete();
    this.listenForVotes();
  }

  createTemplate() {
    this.el.innerHTML = `
      <h3 class="movie-item__title"></h3>
      <p class="movie-item__votes"></p>
      <button class="movie-item__delete">X</button>
      <button class="movie-item__up">YAS</button>
      <button class="movie-item__nah">NAH</button>`;
  }

  render() {
    this.el.querySelector(`.movie-item__title`).innerText = this.movieInfo.title;
    this.el.querySelector(`.movie-item__votes`).innerText = this.movieInfo.score;
  }

  listenForDelete() {
    this.el.querySelector(`.movie-item__delete`).addEventListener(`click`, () => {
      if (window.confirm(`Are you sure?!`)) {
        fetch(`${this.app.url}/${this.movieInfo._id}`, {
          method: `Delete`
        }).then(() => {
          this.app.remove(this.movieInfo);
        });
      }
    });
  }

  updateScore(change = 1) {
    const newScore = this.movieInfo.score + change;

    fetch(`${this.app.url}/${this.movieInfo._id}`, {
      method: `PUT`,
      headers: {
        Accept: `application/json`,
        'Content-type': `application/json`,
      },
      body: JSON.stringify({...this.movieInfo, score: newScore})
    }).then((response) => {
      return response.json();
    }).then((updatedValues) => {
      Object.assign(this.movieInfo, updatedValues);

      this.render();
    });
  }

  listenForVotes() {
    this.el.querySelector(`.movie-item__up`).addEventListener(`click`, () => {
      this.updateScore(10);
    });

    this.el.querySelector(`.movie-item__nah`).addEventListener(`click`, () => {
      this.updateScore(-50);
    });
  }
}
