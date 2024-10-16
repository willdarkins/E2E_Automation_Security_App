import { test, expect } from '@playwright/test'

test.describe('filter transactions', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('http://zero.webappsecurity.com/index.html')
        await page.click('#signin_button')
        await page.fill('#user_login', 'username')
        await page.fill('#user_password', 'password')
        await page.click('text=Sign in')
    })
    test('savings account', async ({ page }) => {
        await page.goto('http://zero.webappsecurity.com/bank/account-activity.html')

    })
})