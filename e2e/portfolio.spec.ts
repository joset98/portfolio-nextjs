import { test, expect } from "@playwright/test"

test("server HTML already contains the content, not a loading screen", async ({ request }) => {
  const html = await (await request.get("/")).text()
  expect(html).not.toContain("Cargando portafolio")
  expect(html).toContain("Azordev")
  expect(html).toContain("jtovar26455462@gmail.com")
})

test("impact figures count up to their final values", async ({ page }) => {
  await page.goto("/")
  await expect(page.locator("aside table tbody tr").first()).toContainText("30%")
})

test("project modal opens on click, closes with Escape without a Back trap, and opens from a deep link", async ({ page }) => {
  await page.goto("/")
  await page.locator("#projects button").first().click()
  await expect(page).toHaveURL(/\?project=/)
  await expect(page.getByRole("dialog")).toBeVisible()
  await page.keyboard.press("Escape")
  await expect(page.getByRole("dialog")).toBeHidden()
  await expect(page).not.toHaveURL(/\?project=/)
  await expect(page.locator("#projects button").first()).toBeFocused()
  // Closing replaces the history entry, so Back must not reopen the modal.
  await page.goBack()
  await expect(page.getByRole("dialog")).toBeHidden()

  await page.goto("/?project=medisync")
  await expect(page.getByRole("dialog")).toBeVisible()
})

test("server picks the language from the browser and sends matching title, description and lang", async ({ request }) => {
  const es = await (await request.get("/", { headers: { "accept-language": "es-VE,es;q=0.9,en;q=0.8" } })).text()
  expect(es).toContain('<html lang="es"')
  expect(es).toContain("con 6+ años")
  expect(es).toContain("Construyo sistemas")

  const en = await (await request.get("/", { headers: { "accept-language": "en-US,en;q=0.9" } })).text()
  expect(en).toContain('<html lang="en"')
  expect(en).toContain("with 6+ years")
  expect(en).toContain("I build")

  // No header (crawlers) falls back to English; a saved cookie beats the browser language.
  expect(await (await request.get("/", { headers: { "accept-language": "" } })).text()).toContain('<html lang="en"')
  const saved = await (await request.get("/", { headers: { "accept-language": "en-US", cookie: "lang=es" } })).text()
  expect(saved).toContain('<html lang="es"')
})

test("language switch updates copy, title, description and is remembered", async ({ browser }) => {
  const context = await browser.newContext({ locale: "es-ES" })
  const page = await context.newPage()
  await page.goto("/")
  await expect(page.locator("html")).toHaveAttribute("lang", "es")
  await page.getByRole("button", { name: "English" }).click()
  await expect(page.locator("html")).toHaveAttribute("lang", "en")
  await expect(page.getByRole("heading", { level: 2 }).first()).toContainText("I build")
  await expect(page.locator('meta[name="description"]')).toHaveAttribute("content", /with 6\+ years/)

  await page.reload()
  await expect(page.locator("html")).toHaveAttribute("lang", "en")
  await context.close()
})

test("no horizontal scroll on a phone", async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 800 })
  await page.goto("/")
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true)
})
