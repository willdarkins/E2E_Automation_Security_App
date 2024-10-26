import { test, expect } from '@playwright/test'
import { LoginPage } from '../../page-objects/LoginPage'
import { HomePage } from '../../page-objects/HomePage'

test.describe('pay bills', () => {
    let homePage: HomePage
    let loginPage: LoginPage
    
    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page)
        loginPage = new LoginPage(page) 
        
       await homePage.visit()
       await homePage.clickOnSignIn()
       await loginPage.login('username', 'password')
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