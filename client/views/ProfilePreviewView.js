import { View } from '/View.js';
import { div, button } from '/dom.js';

export class ProfilePreviewView extends View {
  constructor(model, $el = null) {
    super();
    this.$el = $el || div();
    this.model = model;

    this.onLoginClick = this.onLoginClick.bind(this);
  }

  onLoginClick(event) {
    event.preventDefault();
    this.emit('LOGIN_CLICK');
  }

  async renderProfile() {
    console.log(await this.model.getUser());
  }

  renderLoginLink() {
    const $login = button();
    $login.textContent = 'LOGIN';
    this.listenTo($login, 'click', this.onLoginClick);

    this.$el.innerHTML = '';

    this.$el.appendChild($login);
  }

  async render() {
    if (await this.model.isLoggedIn()) {
      this.renderProfile();
    } else {
      this.renderLoginLink();
    }
  }
}
