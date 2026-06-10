import { test } from "@playwright/test";

test("Add and Search Personal Notes", async ({ page }) => {
  await test.step("Navigate to Playwright page", async () => {
    await page.goto("https://material.playwrightvn.com/");
  });

  await test.step("Navigate to Personal Notes page", async () => {
    await page.locator("//a[text()='Bài học 4: Personal notes']").click();
  });

  //   Add Note
  await test.step("Add notes", async () => {
    await page.locator("//input[@id='note-title']").fill("Click");
    await page
      .locator("//textarea[@id='note-content']")
      .fill("Hàm click được sử dụng để click vào một phần tử trên trang web.");
    await page.locator("//button[@id='add-note']").click();

    await page.locator("//input[@id='note-title']").fill("Click");
    await page
      .locator("//textarea[@id='note-content']")
      .fill("Hàm click được sử dụng để click vào một phần tử trên trang web.");
    await page.locator("//button[@id='add-note']").click();

    await page.locator("//input[@id='note-title']").fill("type");
    await page
      .locator("//textarea[@id='note-content']")
      .fill(
        "Hàm type được sử dụng để nhập văn bản vào một phần tử trên trang web.",
      );
    await page.locator("//button[@id='add-note']").click();

    await page.locator("//input[@id='note-title']").fill("hover");
    await page
      .locator("//textarea[@id='note-content']")
      .fill(
        "Hàm hover được sử dụng để di chuột qua một phần tử trên trang web.",
      );
    await page.locator("//button[@id='add-note']").click();

    await page.locator("//input[@id='note-title']").fill("check");
    await page
      .locator("//textarea[@id='note-content']")
      .fill("Hàm check được sử dụng để chọn một hộp kiểm trên trang web.");
    await page.locator("//button[@id='add-note']").click();

    await page.locator("//input[@id='note-title']").fill("uncheck");
    await page
      .locator("//textarea[@id='note-content']")
      .fill("Hàm uncheck được sử dụng để bỏ chọn một hộp kiểm trên trang web.");
    await page.locator("//button[@id='add-note']").click();

    await page.locator("//input[@id='note-title']").fill("selectOption");
    await page
      .locator("//textarea[@id='note-content']")
      .fill(
        "Hàm selectOption được sử dụng để chọn một hoặc nhiều option trong thẻ select dropdown.",
      );
    await page.locator("//button[@id='add-note']").click();

    await page.locator("//input[@id='note-title']").fill("press");
    await page
      .locator("//textarea[@id='note-content']")
      .fill(
        "Hàm press được sử dụng để mô phỏng việc nhấn phím trên bàn phím như Enter, Tab, Space hoặc các phím khác",
      );
    await page.locator("//button[@id='add-note']").click();

    await page.locator("//input[@id='note-title']").fill("dbclick");
    await page
      .locator("//textarea[@id='note-content']")
      .fill(
        "Hàm dbclick được sử dụng để thực hiện cú click đôi vào một phần tử trên trang web.",
      );
    await page.locator("//button[@id='add-note']").click();

    await page.locator("//input[@id='note-title']").fill("dragAndDrop");
    await page
      .locator("//textarea[@id='note-content']")
      .fill(
        "Hàm dragAndDrop được sử dụng để kéo và thả một phần tử trên trang web.",
      );
    await page.locator("//button[@id='add-note']").click();
  });

  // Search Note
  await test.step("Search note", async () => {
    await page.locator("//input[@id='search']").fill("một hoặc nhiều");
  });
});
