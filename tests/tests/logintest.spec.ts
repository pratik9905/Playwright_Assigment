import { test, expect } from '@playwright/test';
import { LoginPage } from '../Pages/Login.page';
import { HomePage } from '../Pages/Home.page';
import { Utils } from '../utils/utils';
import testData from '../data.json';

test.describe('Login Tests', () => {
  let loginPage: LoginPage;
  let homePage: HomePage;
  let utils: Utils;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    homePage = new HomePage(page);
    utils = new Utils(page);
    await page.goto('https://www.saucedemo.com/');
  });

  test('Login with valid credentials', async ({ page }) => {
    
    await loginPage.login(testData.Credentials.username[0], testData.Credentials.password[0]);
    const isLoggedIn = await homePage.isLoggedIn();
    expect(isLoggedIn).toBeTruthy();
  });

  test('Login with invalid credentials', async ({ page }) => {
    const { username, password } = testData.Credentials;
    await loginPage.login(testData.Credentials.username[1], testData.Credentials.password[1]);
    const errorMessage = await loginPage.getLoginErrorMessage();
    expect(errorMessage).toContain('Epic sadface');
  });

  test('Login with empty credentials', async ({ page }) => {
    await loginPage.login('', '');
    const errorMessage = await loginPage.getLoginErrorMessage();
    expect(errorMessage).toContain('Epic sadface');
  });

  test('Reuse logged-in session', async ({ page, context }) => {
    await loginPage.login(testData.Credentials.username[0], testData.Credentials.password[0]);
    await context.storageState({ path: 'session.json' });

    const browser = context.browser();
    if (browser) {
      const newContext = await browser.newContext({ storageState: 'session.json' });
      const newPage = await newContext.newPage();
      homePage = new HomePage(newPage);
      await newPage.goto('https://www.saucedemo.com/inventory.html');
      const isLoggedIn = await homePage.isLoggedIn();
      expect(isLoggedIn).toBeTruthy();
    }
  });

  test('Data-driven login test with multiple credentials', async ({ page }) => {
    const { username, password } = testData.Credentials;

    for (let i = 0; i < username.length; i++) {
      const currentUsername = username[i];
      const currentPassword = password[i];

      await loginPage.login(currentUsername, currentPassword);

      if (currentUsername === testData.Credentials.username[0] && currentPassword === testData.Credentials.password[0]) {
        const isLoggedIn = await homePage.isLoggedIn();
        expect(isLoggedIn).toBeTruthy();
      } else {
        const errorMessage = await loginPage.getLoginErrorMessage();
        expect(errorMessage).toContain('Epic sadface');
      }

      await utils.pause(500); // Pause between tests
      await page.goto('https://www.saucedemo.com/');
    }
  });
});
