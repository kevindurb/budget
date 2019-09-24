import { Model } from '/Model.js';
import { AuthenticationService } from '../services/AuthenticationService.js';

export class SessionModel extends Model {
  constructor() {
    super();
    this.authenticationService = new AuthenticationService();
  }

  async checkRedirect() {
    const query = window.location.search;
    if (query.includes("code=") && query.includes("state=")) {
      await this.authenticationService.handleRedirectCallback();
      window.history.replaceState({}, document.title, "/");
    }
    this.emit('CHANGE');
  }

  isLoggedIn() {
    return this.authenticationService.getIsAuthenticated();
  }

  login() {
    return this.authenticationService.login();
  }

  logout() {
    return this.authenticationService.login();
  }

  getUser() {
    return this.authenticationService.getUser();
  }
}
