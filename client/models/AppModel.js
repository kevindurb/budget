import { SessionModel } from './SessionModel.js';

export class AppModel {
  constructor() {
    this.session = new SessionModel();
  }
}
