import { Controller } from '/Controller.js';

export class ProfilePreviewController extends Controller {
  constructor(model, view) {
    super();
    this.model = model;
    this.view = view;

    this.onLoginClick = this.onLoginClick.bind(this);
    this.renderView = this.renderView.bind(this);

    this.listenTo(this.view, 'LOGIN_CLICK', this.onLoginClick);
    this.listenTo(this.model, 'SESSION_READY', this.renderView);
  }

  onLoginClick() {
    this.model.login();
  }

  renderView() {
    this.view.render();
  }
}
