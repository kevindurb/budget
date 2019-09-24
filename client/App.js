import { EventEmitter } from './EventEmitter.js';
import { $ } from '/dom.js';
import { AppModel } from './models/AppModel.js';
import { ProfilePreviewView } from './views/ProfilePreviewView.js';
import { ProfilePreviewController } from './controllers/ProfilePreviewController.js';

export class App extends EventEmitter {
  constructor() {
    super();
    // models
    this.appModel = new AppModel();

    // views
    this.profilePreviewView = new ProfilePreviewView(
      this.appModel.session,
    );

    // controllers
    this.profilePreviewController = new ProfilePreviewController(
      this.appModel.session,
      this.profilePreviewView,
    );

    this.$main = $('main');
  }

  boot() {
    this.$main.appendChild(this.profilePreviewView.$el);

    this.appModel.session.checkRedirect();
  }
}
