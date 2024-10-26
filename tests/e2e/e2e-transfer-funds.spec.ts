import { test, expect } from '@playwright/test'
import { LoginPage } from '../../page-objects/LoginPage'
import { HomePage } from '../../page-objects/HomePage'

test.describe('transfer funds and make payments', () => {
    let homePage: HomePage
    let loginPage: LoginPage
    
    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page)
        loginPage = new LoginPage(page) 
        
       await homePage.visit()
       await homePage.clickOnSignIn()
       await loginPage.login('username', 'password')
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