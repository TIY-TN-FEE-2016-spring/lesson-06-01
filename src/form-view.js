'use strict';

export default class FormView {
  constructor(el, app) {
    this.el = el;
    this.app = app;
    this.el.addEventListener(`submit`, (ev) => {
      ev.preventDefault();

      const title = this.el.querySelector(`.new-movie__title`).value;
      this.app.add({title, score: 0});
      this.el.querySelector(`.new-movie__title`).value = ``;
    });
  }
}
