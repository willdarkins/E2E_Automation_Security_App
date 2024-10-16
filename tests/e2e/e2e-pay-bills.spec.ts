import { test, expect } from '@playwright/test'

test.describe.only('pay bills', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('http://zero.webappsecurity.com/index.html')
        await page.click('#signin_button')
        await page.fill('#user_login', 'username')
        await page.fill('#user_password', 'password')
        await page.click('text=Sign in')
    })
    test('new payment', async ({ page }) => {
        await page.goto('http://zero.webappsecurity.com/bank/pay-bills.html')
        const header = await page.locator('h2')
        await expect(header).toContainText('Make payments to your saved payees')
        await page.selectOption('#sp_payee', 'bofa')
        
        await page.click('#sp_get_payee_details')
        await page.waitForSelector('#sp_payee_details')

        await page.selectOption('#sp_account', '1')
        await page.fill('#sp_amount', '1000')

        await page.fill('#sp_date', '2025-01-01')
        await page.fill('#sp_description', 'put this fucking money in the account')

        await page.click('#pay_saved_payees')
        const message = await page.locator('#alert_content > span')
        await expect(message).toBeVisible()
        await expect(message).toContainText('The payment was successfully submitted.')
    })
})