import { test, expect } from "@playwright/test";
import { readFile } from "node:fs/promises";
import { PNG } from "pngjs";
import pixelmatch from "pixelmatch";

const urls = {
  original: "http://127.0.0.1:3101",
  next: "http://127.0.0.1:3100",
};

async function open(page, version) {
  // Same exact physics version, without depending on the reference page's CDN.
  await page.route(
    "**/cdnjs.cloudflare.com/**/matter.min.js",
    async (route) => {
      await route.fulfill({
        contentType: "application/javascript",
        body: await readFile("node_modules/matter-js/build/matter.min.js"),
      });
    },
  );
  await page.goto(urls[version]);
  await page.evaluate(() => document.fonts.ready);
  await expect(page.locator("#dika-sprite svg")).toHaveCount(1);
}

for (const version of Object.keys(urls)) {
  test(`${version}: tabs, filters, image reveal, brief and clipboard`, async ({
    page,
    context,
  }) => {
    const errors = [];
    page.on("pageerror", (error) => errors.push(error.message));
    page.on("console", (message) => {
      if (/hydrat|Invalid DOM|Invalid attribute/i.test(message.text()))
        errors.push(message.text());
    });
    await context.grantPermissions(["clipboard-read", "clipboard-write"]);
    await open(page, version);

    await page.locator("#t-mkt").click();
    await expect(page.locator("#p-mkt")).toBeVisible();
    await expect(page.locator("#p-brand")).toBeHidden();
    await page.locator("#t-mkt").press("ArrowDown");
    await expect(page.locator("#t-ads")).toBeFocused();
    await page.locator("#t-ads").press("End");
    await expect(page.locator("#p-ip")).toBeVisible();
    await page.locator("#t-ip").press("Home");
    await expect(page.locator("#p-brand")).toBeVisible();

    for (const [filter, count] of [
      ["kv", 3],
      ["branding", 4],
      ["sosmed", 3],
      ["kampanye", 2],
      ["all", 8],
    ]) {
      await page.locator(`[data-f="${filter}"]`).click();
      await expect(page.locator(".stage:visible")).toHaveCount(count);
      await expect(page.locator(`[data-f="${filter}"]`)).toHaveAttribute(
        "aria-pressed",
        "true",
      );
    }
    const card = page.locator(".stage").first();
    await card.click();
    await expect(card).toHaveClass(/is-real/);
    await card.press("Enter");
    await expect(card).not.toHaveClass(/is-real/);
    await page.locator(".team").press("Space");
    await expect(page.locator(".team")).toHaveClass(/is-real/);

    await page.locator("#f-nama").fill("Dina <script>");
    await page.locator("#f-brand").fill("Brand & Co");
    await page.locator('label[for="m-kamp"]').click();
    await page.locator("#f-waktu").selectOption("Belum tahu");
    await page
      .locator("#f-cerita")
      .fill("Target: audiens baru\nKonten & strategi.");
    const brief =
      "BRIEF PROYEK UNTUK DIKARI STRATEGIC\nMode   : Kampanye\nNama   : Dina <script>\nBrand  : Brand & Co\nWaktu  : Belum tahu\nCerita : Target: audiens baru\nKonten & strategi.";
    await expect(page.locator("#brief-out")).toHaveText(
      brief.replace("BRIEF PROYEK UNTUK DIKARI STRATEGIC", "> BRIEF.TXT") + ":",
    );
    await page
      .getByRole("button", { name: "Susun brief", exact: true })
      .click();
    await expect(page.locator("#copy-brief")).toBeFocused();
    await page.locator("#copy-brief").click();
    await expect(page.locator("#brief-status")).toContainText("Brief tersalin");
    expect(
      (await page.evaluate(() => navigator.clipboard.readText())).replace(
        /\r\n/g,
        "\n",
      ),
    ).toBe(brief);
    await page.locator('[data-copy="mail"]').click();
    await expect(page.locator('[data-copy="mail"]')).toHaveText("TERSALIN");
    expect(await page.evaluate(() => navigator.clipboard.readText())).toBe(
      "dikaristrategic@gmail.com",
    );
    expect(errors).toEqual([]);
  });

  test(`${version}: physics, game, mascot persistence and Konami`, async ({
    page,
  }) => {
    const errors = [];
    page.on("pageerror", (error) => errors.push(error.message));
    await open(page, version);
    await page.locator("#arena-btn").click();
    await expect(page.locator("#arena-btn")).toHaveText("LEDAKKAN");
    await expect(page.locator("#arena-status")).toHaveText(
      "ARENA 01 / 1P READY",
    );
    await page.locator("#arena-btn").click();
    await expect(page.locator("#arena-status")).toHaveText(
      "ARENA 01 / BEBAS MAIN",
    );
    await expect
      .poll(() =>
        page.locator("#arena-cv").evaluate((canvas) =>
          canvas
            .getContext("2d")
            .getImageData(0, 0, canvas.width, canvas.height)
            .data.some((value) => value > 0),
        ),
      )
      .toBe(true);

    await page.locator("#dika-body").click();
    await expect(page.locator("#dika-text")).toHaveText(
      "Klik logonya, lihat apa yang terjadi.",
    );
    await page.locator("#dika-x").click();
    await expect(page.locator("#dika")).toBeHidden();
    await page.reload();
    await expect
      .poll(() => page.evaluate(() => localStorage.getItem("dika-off")))
      .toBe("1");
    await expect(page.locator("#dika")).toBeHidden();

    await page.locator("#press").click();
    await expect(page.locator("#game")).toBeVisible();
    await expect(page.locator("#g-status")).toHaveText("1P PLAYING");
    await page.locator("#game").press("Space");
    await expect
      .poll(() =>
        page
          .locator("#game")
          .evaluate(
            (canvas) =>
              canvas.getContext("2d").getImageData(0, 0, 320, 208).data[3],
          ),
      )
      .toBe(255);
    await page.locator("#game").press("Escape");
    await expect(page.locator("#title-screen")).toBeVisible();
    await expect(page.locator("#press")).toBeFocused();

    for (const key of [
      "ArrowUp",
      "ArrowUp",
      "ArrowDown",
      "ArrowDown",
      "ArrowLeft",
      "ArrowRight",
      "ArrowLeft",
      "ArrowRight",
      "b",
      "a",
    ])
      await page.keyboard.press(key);
    await expect(page.locator("html")).toHaveClass(/cheat/);
    await expect(page.locator(".toast")).toHaveText(
      "CHEAT AKTIF: semua stage terbuka.",
    );
    expect(errors).toEqual([]);
  });

  test(`${version}: mobile menu, touch images and static quest`, async ({
    page,
  }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await open(page, version);
    await page.locator(".menu-toggle").click();
    await expect(page.locator(".menu-toggle")).toHaveText("TUTUP");
    await expect(page.locator("#nav")).toBeVisible();
    await page.locator('#nav a[href="#karya"]').click();
    await expect(page.locator(".menu-toggle")).toHaveText("MENU");
    await expect(page.locator("#nav")).toBeHidden();
    await expect(page.locator("#cara-kerja")).toHaveClass(/quest-static/);
    await page.locator(".stage").first().click();
    await expect(page.locator(".stage").first()).toHaveClass(/is-real/);
  });

  test(`${version}: desktop quest follows scroll and updates HUD`, async ({
    page,
  }) => {
    await open(page, version);
    await expect(page.locator("#cara-kerja")).not.toHaveClass(/quest-static/);
    await page.evaluate(() => {
      const pin = document.querySelector("#quest-pin");
      const view = document.querySelector("#quest-view");
      const top = window.scrollY + pin.getBoundingClientRect().top;
      window.scrollTo({
        top: top + (pin.offsetHeight - view.clientHeight) * 0.6,
        behavior: "instant",
      });
    });
    await expect(page.locator("#hud-where")).toHaveText("QUEST");
    await expect(page.locator("#dika")).toHaveClass(/is-away/);
    await expect
      .poll(() => page.locator(".qcoin.got").count())
      .toBeGreaterThan(0);
    await expect
      .poll(() => page.locator(".qpost.is-clear").count())
      .toBeGreaterThan(0);
    await expect
      .poll(() => page.locator("#qbar i.on").count())
      .toBeGreaterThan(0);
    await expect(page.locator("#reveal span").first()).toHaveClass("on");
  });
}

for (const width of [1440, 768, 390]) {
  test(`visual parity against original HTML at ${width}px`, async ({
    context,
  }, testInfo) => {
    const pages = {};
    for (const version of Object.keys(urls)) {
      const page = await context.newPage();
      await page.setViewportSize({ width, height: 1000 });
      await page.emulateMedia({ reducedMotion: "reduce" });
      await open(page, version);
      // Dynamic canvases and blinking sprites are compared by interaction tests.
      await page.addStyleTag({
        content:
          "canvas, .dika { visibility: hidden !important; } *, *::before, *::after { animation: none !important; transition: none !important; }",
      });
      await page.evaluate(async () => {
        document
          .querySelectorAll("img")
          .forEach((image) => (image.loading = "eager"));
        await Promise.all(
          [...document.images].map((image) => image.decode().catch(() => {})),
        );
        window.scrollTo({ top: 0, behavior: "instant" });
      });
      pages[version] = page;
    }
    const sections = [
      "#top",
      "#start",
      "#manifesto",
      "#sistem",
      "#layanan",
      "#karya",
      "#network",
      "#cara-kerja",
      "#bonus",
      "#klien",
      "#kontak",
      ".foot",
    ];
    for (const selector of sections) {
      const images = {};
      for (const version of Object.keys(urls))
        images[version] = PNG.sync.read(
          await pages[version]
            .locator(selector)
            .screenshot({ animations: "disabled" }),
        );
      expect(images.next.width, `${selector} width`).toBe(
        images.original.width,
      );
      expect(images.next.height, `${selector} height`).toBe(
        images.original.height,
      );
      const diff = new PNG({
        width: images.next.width,
        height: images.next.height,
      });
      const pixels = pixelmatch(
        images.original.data,
        images.next.data,
        diff.data,
        diff.width,
        diff.height,
        { threshold: 0.1 },
      );
      const ratio = pixels / (diff.width * diff.height);
      if (ratio > 0.001) {
        await testInfo.attach(`${selector}-diff`, {
          body: PNG.sync.write(diff),
          contentType: "image/png",
        });
        await testInfo.attach(`${selector}-next`, {
          body: PNG.sync.write(images.next),
          contentType: "image/png",
        });
        await testInfo.attach(`${selector}-original`, {
          body: PNG.sync.write(images.original),
          contentType: "image/png",
        });
      }
      expect(ratio, `${selector} changed pixels`).toBeLessThanOrEqual(0.001);
    }
    for (const page of Object.values(pages)) await page.close();
  });
}

test("page fits the viewport and brief radio buttons remain keyboard accessible", async ({
  page,
}) => {
  for (const width of [320, 360, 390, 610, 768, 900, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    await open(page, "next");
    await expect
      .poll(() => page.evaluate(() => document.documentElement.scrollWidth))
      .toBe(width);
    if (width <= 900) await page.locator(".menu-toggle").click();
    await expect
      .poll(() => page.evaluate(() => document.documentElement.scrollWidth))
      .toBe(width);
    await page.locator("#m-kamp").focus();
    await page.locator("#m-kamp").press("Space");
    await expect(page.locator("#m-kamp")).toBeChecked();
    await expect(page.locator("#brief-out")).toContainText("Mode   : Kampanye");
    await expect
      .poll(() => page.evaluate(() => document.documentElement.scrollWidth))
      .toBe(width);
    await page.evaluate(() =>
      window.scrollTo({ left: 1000, behavior: "instant" }),
    );
    expect(await page.evaluate(() => window.scrollX)).toBe(0);
  }
});

test("Next server renders content and defaults with JavaScript disabled", async ({
  browser,
}) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  await page.goto(urls.next);
  await expect(page.locator("h1")).toHaveText(
    "Bikin brand kamu jadi pemain utama.",
  );
  await expect(page.locator(".stage")).toHaveCount(8);
  await expect(page.locator("#p-brand")).toBeVisible();
  await expect(page.locator("#f-waktu")).toHaveValue("1 sampai 3 bulan");
  await expect(page.locator("#brief-out")).toContainText("Mode   : Brand baru");
  await context.close();
});
