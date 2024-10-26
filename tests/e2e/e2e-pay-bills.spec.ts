import { test } from '@playwright/test'
import { LoginPage } from '../../page-objects/LoginPage'
import { HomePage } from '../../page-objects/HomePage'
import { PaymentPage } from '../../page-objects/PaymentPage'
import { Navbar } from '../../page-objects/components/Navbar'

test.describe('pay bills', () => {
    let homePage: HomePage
    let loginPage: LoginPage
    let paymentPage: PaymentPage
    let navbar: Navbar
    
    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page)
        loginPage = new LoginPage(page)
        paymentPage = new PaymentPage(page)
        navbar = new Navbar(page) 
        
       await homePage.visit()
       await homePage.clickOnSignIn()
       await loginPage.login('username', 'password')
    })
    test('new payment', async ({ page }) => {
        navbar.clickOnTab('Pay Bills')
        await paymentPage.createPayment()
        await paymentPage.assertSuccessMessage()
        
        // await page.click('#sp_get_payee_details')
        // await page.waitForSelector('#sp_payee_details')

        // await page.selectOption('#sp_account', '1')
        // await page.fill('#sp_amount', '1000')

        // await page.fill('#sp_date', '2025-01-01')
        // await page.fill('#sp_description', 'put this fucking money in the account')

        // await page.click('#pay_saved_payees')
        // const message = await page.locator('#alert_content > span')
        // await expect(message).toBeVisible()
        // await expect(message).toContainText('The payment was successfully submitted.')
    })
})