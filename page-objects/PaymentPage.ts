import { expect, Locator, Page } from "@playwright/test";

export class PaymentPage {
    readonly page: Page
    readonly payeeSelectBox: Locator
    readonly payeeDetailButton: Locator
    readonly payeeDetail: Locator
    readonly accountSelectBox: Locator
    readonly accountInput: Locator
    readonly dateInput: Locator
    readonly descriptionInput: Locator
    readonly submitPaymentButton: Locator
    readonly message: Locator
}