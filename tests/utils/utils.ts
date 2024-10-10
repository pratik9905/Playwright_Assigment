import { Page } from '@playwright/test';

export class Utils {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Method to check if an element is visible
  async isVisible(selector: string): Promise<boolean> {
    return await this.page.isVisible(selector);
  }

  

  // Method to pause for a specified duration (in milliseconds)
  async pause(milliseconds: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
  }
}
