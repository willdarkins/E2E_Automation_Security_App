import { test, expect } from '@playwright/test'

test.describe.parallel('login/logout flow', () => {
    //before hook to send to website for each test
    test.beforeEach(async ({page}) => {
        await page.goto('http://zero.webappsecurity.com/')
    })
    //negative scenario
    test('negative scenario for login', async ({page}) => {
        await page.click('#signin_button')
        await page.fill('#user_login', 'invalid username')
        await page.fill('#user_password', 'invalid password')
        await page.click('text=Sign in')
        const errorMessage = await page.locator('.alert-error')
        await expect(errorMessage).toContainText('Login and/or password are wrong.')
    })
    //positive scenario + logout
    test.only('positive scenario for Login + Logout', async ({page}) => {
        await page.goto('http://zero.webappsecurity.com/index.html')
        await page.click('#signin_button')
        await page.fill('#user_login', 'username')
        await page.fill('#user_password', 'password')
        await page.click('text=Sign in')
        
        const accountSummaryTab = await page.locator('#account_activity_tab')
        await expect(accountSummaryTab).toBeVisible
        //below... I'm now navigating to the logout page to confirm it exists
        await page.goto('http://zero.webappsecurity.com/index.html')
        await expect(page).toHaveURL('http://zero.webappsecurity.com/index.html')
    })
})