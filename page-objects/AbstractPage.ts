import { Page } from "@playwright/test";

export class AbstractPage {
    readonly page: Page

    constructor(page:Page) {
        this.page = page
    }
}