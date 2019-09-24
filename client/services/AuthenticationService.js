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

  async checkRedirect() {
    const client = await this.getClient();
    const query = window.location.search;
    if (query.includes("code=") && query.includes("state=")) {
      await client.handleRedirectCallback();
      window.history.replaceState({}, document.title, "/");
    }
  }

  async getUser() {
    const client = await this.getClient();
    return client.getUser();
  }
}
