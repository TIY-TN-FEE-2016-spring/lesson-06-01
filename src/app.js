import MovieItem from 'movie-item';
import FormView from 'form-view';

export default class Application {
  constructor(element) {
    this.form = element.querySelector(`.new-movie`);
    this.list = element.querySelector(`.movie-list`);
    this.url = `http://tiny-tn.herokuapp.com/collections/movies`;
    this.data = [];

    fetch(this.url).then((response) => {
      return response.json();
    }).then((serverInfo) => {
      this.data = serverInfo;

      this.renderList();
    });

    this.formview = new FormView(this.form, this);
    this.renderList();
  }

  add(movie) {
    fetch(this.url, {
      method: `POST`,
      headers: {
        Accept: `application/json`,
        'Content-type': `application/json`,
      },
      body: JSON.stringify(movie),
    }).then((response) => {
      return response.json();
    }).then((result) => {
      this.data = [result, ...this.data];

      this.renderList();
    });
  }

  renderList() {
    this.list.innerHTML = ``;

    this.data.forEach((movie) => {
      const v = new MovieItem(movie, this);

      this.list.appendChild(v.el);
    });
  }

  remove(movieInfo) {
    this.data = this.data.filter((current) => {
      return current !== movieInfo;
    });

    this.renderList();
  }
}
