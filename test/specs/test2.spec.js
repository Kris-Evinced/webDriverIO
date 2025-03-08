import { expect, browser, $ } from "@wdio/globals";
//import assert from "assert";
//import { url } from "inspector";

describe("Evinced Demo Site tests", () => {
    it("scan site for issues using evAnalyze", async () => {
        await browser.url("https://demo.evinced.com/");
        // Scan the page for accessibility issues
        const issues = await browser.evAnalyze();
        await browser.evSaveFile(issues, "html", "./test/issues.html");

    });
});