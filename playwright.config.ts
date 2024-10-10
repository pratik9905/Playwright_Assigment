import { report } from "process";

const { defineConfig, devices } = require('@playwright/test');

export default defineConfig({
  

  use: {
    headless: false, 
    baseURL: 'https://example.com', 
    browserName: 'chromium',
    screenshot: 'only-on-failure', 
    video: 'retain-on-failure', 
  },
  
  retries: 1,
});