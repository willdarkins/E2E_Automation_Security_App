import { expect, Locator, Page } from '@playwright/test'

export class LoginPage {
    //Define selectors
    readonly page: Page;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly submitButton: Locator;
    readonly errorMessage: Locator;

    //Init selectors using constructors
    constructor(page:Page) {
        this.page = page;
        this.usernameInput = page.locator('#user_login')
        this.passwordInput = page.locator('#user_password')
        this.submitButton = page.locator('text=Sign in')
        this.errorMessage = page.locator('.alert-error')
    }
    //Define login page methods 
}