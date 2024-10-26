import { expect, Locator, Page } from "@playwright/test";

export class Navbar {
    readonly page: Page
    readonly accountSummary: Locator
    readonly accountActivity: Locator
    readonly transferFunds: Locator
    readonly payBills: Locator
    readonly myMoneyMap: Locator
    readonly onlineStatements: Locator
}