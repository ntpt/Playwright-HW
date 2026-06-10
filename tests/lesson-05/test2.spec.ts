import { test } from "@playwright/test";

test("Add product to cart", async ({ page }) => {
  await test.step("Navigate to Playwright page", async () => {
    await page.goto("https://material.playwrightvn.com/");
  });

  await test.step("Navigate to Simple E-commerce page", async () => {
    await page.locator("//a[text()='Bài học 2: Product page']").click();
  });

  await test.step("Add product to cart", async () => {
    // Add 1st product: 2 units
    await page
      .locator("//button[@data-product-id='1']")
      .click({ clickCount: 2 });

    // Add 2nd product: 3 units
    await page
      .locator("//button[@data-product-id='2']")
      .click({ clickCount: 3 });

    // Add 3th product: 1 unit
    await page
      .locator("//button[@data-product-id='3']")
      .click({ clickCount: 1 });
  });
});
