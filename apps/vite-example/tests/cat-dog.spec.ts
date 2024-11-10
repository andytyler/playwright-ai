import { test } from "@playwright/test";
import { ai } from "../../../packages/playwright/src/index";

test("identify images", async ({ page }) => {

  await page.goto("/cat-dog");
  await page.setViewportSize({
    width: 1024,
    height: 768,
  });
  await page.waitForLoadState("networkidle");
  await ai("click on the picture of a dog", {
    page,
    test,
  });
});
