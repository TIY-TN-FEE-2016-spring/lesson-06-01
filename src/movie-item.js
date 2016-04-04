export default class MovieItem {
  constructor(movieInfo) {
    this.movieInfo = movieInfo;

    this.el = document.createElement(`li`);
    this.el.classList.add(`movie-item`);

    this.createTemplate();
    this.render();
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
}
