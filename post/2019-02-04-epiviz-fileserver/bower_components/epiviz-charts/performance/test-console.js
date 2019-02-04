const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({
    args: ["--no-sandbox", "--disable-setuid-sandbox"]
  });
  const page = await browser.newPage();

  page.on("console", msg => {
    console.log(msg.text());
  });

  await page.goto(
    "http://localhost:8081/components/epiviz-charts/performance/tests/test-console.html",
    { waitUntil: "networkidle0" }
  );

  // await page.screenshot({ path: file_path + "-" + i + "-scaled.png" });
  await browser.close();
})();
