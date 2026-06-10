import { test } from "@playwright/test";

test("Add and Delete todo list", async ({ page }) => {
  await test.step("Navigate to Playwright page", async () => {
    await page.goto("https://material.playwrightvn.com/");
  });

  await test.step("Navigate to To-Do List page", async () => {
    await page.locator("//a[text()='Bài học 3: Todo page']").click();
  });

  // Add 100 todo items with content "Todo <i>"
  await test.step("Add 100 todo items", async () => {
    for (let i = 1; i <= 100; i++) {
      await page.locator("//input[@id='new-task']").fill(`Todo ${i}`);
      await page.locator("//button[@id='add-task']").click();
    }
  });

  // Handle alert dialog when deleting a todo item
  page.on("dialog", async (dialog) => dialog.accept());

  // Delete all odd-numbered todo items
  await test.step("Delete all odd-numbered todo items", async () => {
    for (let i = 1; i <= 100; i += 2) {
      await page.locator(`//button[@id='todo-${i}-delete']`).click();
    }
  });
});
