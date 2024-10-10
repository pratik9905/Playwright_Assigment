import { Page } from '@playwright/test';
import { Utils } from '../utils/utils';

export class LoginPage {
  private page: Page;
  private utils: Utils;

  private usernameInput = '#user-name';
  private passwordInput = '#password';
  private loginButton = '#login-button';
  private errorMessage = '[data-test="error"]';

  constructor(page: Page) {
    this.page = page;
    this.utils = new Utils(page);
  }

  async login(username: string, password: string) {
    await this.page.fill(this.usernameInput, username);
    await this.page.fill(this.passwordInput, password);
    await this.page.click(this.loginButton);
    await this.utils.pause(1000);  // Pause after login
  }

  async getLoginErrorMessage(): Promise<string> {
    const message = await this.page.textContent(this.errorMessage);
    return message ? message.trim() : ''; 
  }
}
