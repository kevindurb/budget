import { Model } from '/Model.js';
import { AuthenticationService } from '../services/AuthenticationService.js';

export class SessionModel extends Model {
  constructor() {
    super();
    this.authenticationService = new AuthenticationService();

    this.checkRedirect();
  }

  async checkRedirect() {
    await this.authenticationService.checkRedirect();

    this.emit('SESSION_READY');
  }

  isLoggedIn() {
    return this.authenticationService.getIsAuthenticated();
  }

  login() {
    return this.authenticationService.login();
  }

  getUser() {
    return this.authenticationService.getUser();
  }
}
