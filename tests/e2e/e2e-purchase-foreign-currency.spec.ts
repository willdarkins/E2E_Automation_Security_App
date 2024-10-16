import { test, expect } from '@playwright/test'

test.describe('currency exchange', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('http://zero.webappsecurity.com/index.html')
        await page.click('#signin_button')
        await page.fill('#user_login', 'username')
        await page.fill('#user_password', 'password')
        await page.click('text=Sign in')
    })
    test('convert currency', async ({ page }) => {
        await page.goto('http://zero.webappsecurity.com/bank/pay-bills.html')
        const header = await page.locator('h2')
        await expect(header).toContainText('Make payments to your saved payees')

        await page.click('text=Purchase Foreign Currency')
        
    })
})