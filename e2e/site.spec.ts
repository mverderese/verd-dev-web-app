import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

const pages = [
  { path: "/", heading: "Engineering leader for AI products, from the platform up." },
  { path: "/work", heading: "Work." },
  { path: "/work/hubspot", heading: "The platform behind HubSpot's AI agents." },
  { path: "/work/odin", heading: "Workforce software for the biggest job sites in New York." },
  { path: "/work/great-many", heading: "A booking and telehealth platform, built from day one." },
  { path: "/work/renew", heading: "The API and infrastructure behind a Medicare plan finder." },
  { path: "/work/starbucks", heading: "A new Starbucks store, in time for the holidays." },
  { path: "/consulting", heading: "Advice from someone who builds it." },
  { path: "/about", heading: "Hey, I'm Mike." },
];

for (const { path, heading } of pages) {
  test.describe(path, () => {
    test("renders without console errors", async ({ page }) => {
      const errors: string[] = [];
      page.on("console", (message) => {
        if (message.type() === "error") errors.push(message.text());
      });
      page.on("pageerror", (error) => errors.push(error.message));

      await page.goto(path);
      await expect(page.getByRole("heading", { level: 1 })).toHaveText(heading);
      await expect(page.getByRole("contentinfo")).toContainText("Verderese Development LLC");
      expect(errors).toEqual([]);
    });

    test("has no serious accessibility violations", async ({ page }) => {
      await page.goto(path);
      await page.getByRole("heading", { level: 1 }).waitFor();
      const { violations } = await new AxeBuilder({ page }).analyze();
      const serious = violations.filter(({ impact }) => impact === "serious" || impact === "critical");
      expect(serious.map(({ id, nodes }) => `${id}: ${nodes.map((n) => n.target.join(" ")).join(", ")}`)).toEqual([]);
    });
  });
}

test("navigates from the home page to a case study and on to the next", async ({ page }) => {
  await page.goto("/");
  await page
    .getByRole("link", { name: /HubSpot/ })
    .first()
    .click();
  await expect(page).toHaveURL(/\/work\/hubspot$/);
  await page.getByRole("navigation", { name: "Next case study" }).getByRole("link").click();
  await expect(page).toHaveURL(/\/work\/odin$/);
});

test("shows the not-found page for unknown paths", async ({ page }) => {
  await page.goto("/work/not-a-real-project");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("That page isn't here.");
});

test("mobile menu opens and navigates", async ({ page, isMobile }) => {
  test.skip(!isMobile, "Menu button only shows on small screens");
  await page.goto("/");
  await page.getByRole("button", { name: "Open menu" }).click();
  await page.getByRole("navigation", { name: "Primary" }).getByRole("link", { name: "Consulting" }).click();
  await expect(page).toHaveURL(/\/consulting$/);
  await expect(page.getByRole("button", { name: "Open menu" })).toHaveAttribute("aria-expanded", "false");
});
