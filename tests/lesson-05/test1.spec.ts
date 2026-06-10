import { test } from "@playwright/test";

test("Register account", async ({ page }) => {
  await test.step("Go to Playwright page", async () => {
    await page.goto("https://material.playwrightvn.com/");
  });

  await test.step("Click on Bài học 1: Register Page (có đủ các element)", async () => {
    await page
      .locator("//a[text()='Bài học 1: Register Page (có đủ các element)']")
      .click();
  });

  await test.step("Fill all information", async () => {
    // Fill Username field
    await page.locator("//input[@id='username']").fill("PhuongThao");

    // Fill Email field
    await page.locator("//input[@id='email']").fill("PhuongThao@yopmail.com");

    // Fill Gender field
    await page.locator("//input[@id='female']").check();

    // Fill Hobbies field
    await page.locator("//input[@id='reading']").check();
    await page.locator("//input[@id='traveling']").check();
    await page.locator("//input[@id='cooking']").check();

    // Fill Interests field
    await page.locator("//select[@id='interests']").selectOption("art");

    //  Fill Country field
    await page.locator("//select[@id='country']").selectOption("Canada");

    // Fill Date of Birth field
    // await page.locator("//input[@id='dob']").fill('01-02-2000');

    // Fill Profile Picture field
    const filePath = "tests/lesson-05/picture.jpg";
    await page.locator("//input[@id='profile']").setInputFiles(filePath);

    // Fill Biography field
    await page.locator("//textarea[@id='bio']").fill("Hello");

    // Fill Rate field
    await page.locator("//input[@id='rating']").fill("5");

    // Fill Favorite Color field
    await page.locator("//input[@id='favcolor']").fill("#ff0095");

    // Enable feature field
    //  await page.locator("//input[@id='toggleOption']").click();
    await page.locator("//label[@class='switch']").click();

    // Fill Star rating field
    await page.locator("//div[@id='starRating']").click({
      position: {
        x: 90, // 4.5/5 * 100
        y: 10,
      },
    });

    // Fill Custom date field

    // Click on Register button
    await page.locator("//button[text()='Register']").click();
  });
});
