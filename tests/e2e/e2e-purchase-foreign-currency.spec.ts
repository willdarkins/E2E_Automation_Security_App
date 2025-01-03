import { test, expect } from '@playwright/test'
import { LoginPage } from '../../page-objects/LoginPage'
import { HomePage } from '../../page-objects/HomePage'

test.describe('currency exchange', () => {
    let homePage: HomePage
    let loginPage: LoginPage
    
    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page)
        loginPage = new LoginPage(page) 
        
       await homePage.visit()
       await homePage.clickOnSignIn()
       await loginPage.login('username', 'password')
    })
    test('convert currency', async ({ page }) => {
        await page.goto('http://zero.webappsecurity.com/bank/pay-bills.html')
        const header = await page.locator('h2')
        await expect(header).toContainText('Make payments to your saved payees')

        await page.click('text=Purchase Foreign Currency')
        await page.selectOption('#pc_currency','CNY')
        await page.waitForSelector('#sp_sell_rate')
       
        await page.fill('#pc_amount', '1000')

        await page.click('#pc_inDollars_true')
        await page.click('#pc_calculate_costs')

        await page.waitForSelector('#pc_conversion_amount')

        await page.click('#purchase_cash')
        const message = await page.locator('#alert_content')
        await expect(message).toBeVisible()
        await expect(message).toContainText('Foreign currency cash was successfully purchased.')
    })
})