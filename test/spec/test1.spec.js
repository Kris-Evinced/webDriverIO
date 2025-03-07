import { expect, browser, $ } from "@wdio/globals";

describe("Evinced Demo Site tests", () => {
    test("Search Test", async () => {
        await browser.url("https://demo.evinced.com/");
        const BASE_FORM_SELECTOR =
            "#gatsby-focus-wrapper > main > div.wrapper-banner > div.filter-container";
        const SELECT_HOME_DROPDOWN = `${BASE_FORM_SELECTOR} > div:nth-child(1) > div > div.dropdown.line`;
        const SELECT_WHERE_DROPDOWN = `${BASE_FORM_SELECTOR} > div:nth-child(2) > div > div.dropdown.line`;
        const TINY_HOME_OPTION = `${BASE_FORM_SELECTOR} > div:nth-child(1) > div > ul > li:nth-child(2)`;
        const EAST_COST_OPTION = `${BASE_FORM_SELECTOR} > div:nth-child(2) > div > ul > li:nth-child(3)`;
        const SUBMIT_BUTTON = `${BASE_FORM_SELECTOR} > .search-btn`;
        await $(SELECT_HOME_DROPDOWN).click();
        await $(TINY_HOME_OPTION).click();
        await $(SELECT_WHERE_DROPDOWN).click();
        await $(EAST_COST_OPTION).click();
        await $(SUBMIT_BUTTON).click();
        expect(browser).toHaveUrlContaining("/results");
    });
});