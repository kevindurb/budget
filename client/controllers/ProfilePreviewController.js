import { Controller } from '/Controller.js';

export class ProfilePreviewController extends Controller {
  constructor(model, view) {
    super();
    this.model = model;
    this.view = view;

    this.listenTo(this.view, 'LOGIN_CLICK', this.onLoginClick);
    this.listenTo(this.view, 'LOGOUT_CLICK', this.onLogoutClick);
    this.listenTo(this.model, 'CHANGE', this.renderView);
  }

  onLoginClick() {
    this.model.login();
  }

  onLogoutClick() {
    this.model.logout();
  }

  renderView() {
    this.view.render();
  }
}
