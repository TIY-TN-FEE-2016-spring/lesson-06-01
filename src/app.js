import MovieItem from 'movie-item';

export default class Application {
  constructor(element) {
    this.form = element.querySelector(`.new-movie`);
    this.list = element.querySelector(`.movie-list`);
    this.data = [
      {title: `Batman vs Superman`, score: 4},
      {title: `Batman Begins`, score: 4000},
    ];

    this.data.forEach((movie) => {
      const v = new MovieItem(movie);

      this.list.appendChild(v.el);
    });
  }
}
