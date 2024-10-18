import { expect, Locator, Page } from '@playwright/test'

export class LoginPage {
    //Define selectors
    readonly page: Page;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly signInButton: Locator;
    readonly submitButton: Locator;
    readonly errorMessage: Locator;

    //Init selectors using constructors
    constructor(page:Page) {
        this.page = page;
        this.signInButton = page.locator('#signin_button')
        this.usernameInput = page.locator('#user_login')
        this.passwordInput = page.locator('#user_password')
        this.submitButton = page.locator('text=Sign in')
        this.errorMessage = page.locator('.alert-error')
    }
    //Define login page methods 
    async visit() {
        await this.page.goto('http://zero.webappsecurity.com/')
    }

    async login(username: string, password: string) {
        await this.signInButton.click()
        await this.usernameInput.fill(username)
        await this.passwordInput.fill(password)
        await this.submitButton.click()
    }

    async assertErrorMessage() {
        await expect(this.errorMessage).toContainText('Login and/or password are wrong.')
    }
}