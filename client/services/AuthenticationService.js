export class AuthenticationService {
  async getClient() {
    if (!this.client) {
      this.client = await createAuth0Client({
        domain: process.env.AUTH_DOMAIN,
        client_id: process.env.AUTH_CLIENT_ID,
      });
    }

    return this.client;
  }

  async getIsAuthenticated() {
    const client = await this.getClient();

    return client.isAuthenticated();
  }

  async login() {
    const client = await this.getClient();
    await client.loginWithRedirect({
      redirect_uri: window.location.origin
    });
  }

  async logout() {
    const client = await this.getClient();
    client.logout({
      returnTo: window.location.origin
    });
  }

  async handleRedirectCallback() {
    const client = await this.getClient();
    await client.handleRedirectCallback();
  }

  async getUser() {
    const client = await this.getClient();
    return client.getUser();
  }
}
