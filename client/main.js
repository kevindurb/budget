import { $ } from '/dom.js';
import { AppModel } from './models/AppModel.js';
import { ProfilePreviewView } from './views/ProfilePreviewView.js';
import { ProfilePreviewController } from './controllers/ProfilePreviewController.js';

// models
const appModel = new AppModel();

// views
const profilePreviewView = new ProfilePreviewView(
  appModel.session,
);

// controllers
const profilePreviewController = new ProfilePreviewController(
  appModel.session,
  profilePreviewView,
);

const $main = $('main');

$main.appendChild(profilePreviewView.$el);
