import { test, expect } from '@playwright/test'

test.describe('transfer funds and make payments', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('http://zero.webappsecurity.com/index.html')
        await page.click('#signin_button')
        await page.fill('#user_login', 'username')
        await page.fill('#user_password', 'password')
        await page.click('text=Sign in')
    })
    test('transfer funds', async ({ page }) => {
        await page.goto('http://zero.webappsecurity.com/bank/transfer-funds.html')
        const header = await page.locator('h2');
        await expect(header).toBeVisible();

        await page.selectOption('#tf_fromAccountId','2')
        await page.selectOption('#tf_toAccountId', '3')
        await page.fill('#tf_amount', '500')
        await page.fill('#tf_description', 'Money for living')

        await page.click('#btn_submit')
        await page.waitForURL('http://zero.webappsecurity.com/bank/transfer-funds-verify.html')
        await page.click('#btn_submit')

        await page.waitForURL('http://zero.webappsecurity.com/bank/transfer-funds-confirm.html')
        const successMessage = await page.locator('.alert-success') 
        await expect (successMessage).toContainText('You successfully submitted your transaction.');
    })
})