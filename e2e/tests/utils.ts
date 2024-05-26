import { before, beforeEach, after, afterEach } from "node:test";

import * as puppeteer from "puppeteer";

const baseUrl = process.env["baseUrl"] ?? "http://localhost:4200/";
let browser: puppeteer.Browser;
let page: puppeteer.Page;

export function setupBrowserHooks(path = ""): void {
  before(async () => {
    browser = await puppeteer.launch({ headless: false, devtools: true, slowMo: 100 });
  });

  beforeEach(async () => {
    page = await browser.newPage();
    await page.setViewport({ width: 1366, height: 768 });
    await page.goto(`${baseUrl}${path}`);
  });

  afterEach(async () => {
    await page?.close();
  });

  after(async () => {
    await browser?.close();
  });
}

export function getBrowserState(): {
  browser: puppeteer.Browser;
  page: puppeteer.Page;
  baseUrl: string;
} {
  if (!browser) {
    throw new Error("No browser state found! Ensure `setupBrowserHooks()` is called.");
  }
  return {
    browser,
    page,
    baseUrl,
  };
}
