import MovieItem from 'movie-item';
import FormView from 'form-view';

export default class Application {
  constructor(element) {
    this.form = element.querySelector(`.new-movie`);
    this.list = element.querySelector(`.movie-list`);
    this.data = [
      {title: `Batman vs Superman`, score: 4},
      {title: `Batman Begins`, score: 4000},
    ];

    this.formview = new FormView(this.form, this);
    this.render();
  }

  add(movie) {
    this.data = [movie, ...this.data];

    this.render();
  }

  render() {
    this.list.innerHTML = ``;

    this.data.forEach((movie) => {
      const v = new MovieItem(movie);

      this.list.appendChild(v.el);
    });
  }
}
