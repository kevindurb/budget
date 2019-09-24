import { View } from '/View.js';
import { build } from '/fluent.js';

export class ProfilePreviewView extends View {
  getEvents() {
    return {
      'click #login': 'onLoginClick',
      'click #logout': 'onLogoutClick',
    };
  }

  onLoginClick(event) {
    event.preventDefault();
    this.emit('LOGIN_CLICK');
  }

  onLogoutClick(event) {
    event.preventDefault();
    this.emit('LOGOUT_CLICK');
  }

  async renderProfile() {
    const user = await this.model.getUser();

    build(this.$el)
    .clear()
    .child(user.nickname)
    .child(
      build('button')
      .text('LOGOUT')
      .id('logout')
    );
  }

  renderLoginLink() {
    build(this.$el)
    .clear()
    .child(
      build('button')
      .text('LOGIN')
      .id('login')
    );
  }

  async render() {
    if (await this.model.isLoggedIn()) {
      this.renderProfile();
    } else {
      this.renderLoginLink();
    }
  }
}
