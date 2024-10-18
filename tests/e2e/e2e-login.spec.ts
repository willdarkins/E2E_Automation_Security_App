import { test, expect } from '@playwright/test'
import { LoginPage } from '../../page-objects/LoginPage'

test.describe.only('login/logout flow', () => {
    let loginPage: LoginPage

    //before hook to send to website for each test
    test.beforeEach(async ({page}) => {
        loginPage = new LoginPage(page)
        await loginPage.visit()
    })
    //negative scenario
    test('negative scenario for login', async ({ page }) => {
        // await page.click('#signin_button')
        await loginPage.login('invalid username', 'invalid password')
        await loginPage.assertErrorMessage()

    })
    //positive scenario + logout
    test('positive scenario for Login + Logout', async ({ page }) => {
        // await page.click('#signin_button')
        
        await loginPage.login('username', 'password')
        
        const accountSummaryTab = await page.locator('#account_activity_tab')
        await expect(accountSummaryTab).toBeVisible
        //below... I'm now navigating to the logout page to confirm it exists
        await page.goto('http://zero.webappsecurity.com/index.html')
        await expect(page).toHaveURL('http://zero.webappsecurity.com/index.html')
    })
})