import { Page } from '@playwright/test';

export class HomePage {
  private page: Page;
  private homeText = '#item_1_title_link';

  constructor(page: Page) {
    this.page = page;
  }

  async isLoggedIn(): Promise<boolean> {
    return await this.page.isVisible(this.homeText); 
  }
}
