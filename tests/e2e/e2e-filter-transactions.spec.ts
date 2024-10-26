import { test, expect } from '@playwright/test'
import { LoginPage } from '../../page-objects/LoginPage'
import { HomePage } from '../../page-objects/HomePage'

test.describe('filter transactions', () => {
    let homePage: HomePage
    let loginPage: LoginPage
    
    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page)
        loginPage = new LoginPage(page) 
        
       await homePage.visit()
       await homePage.clickOnSignIn()
       await loginPage.login('username', 'password')
    })
    test('verify results for each account', async ({ page }) => {
        await page.goto('http://zero.webappsecurity.com/bank/account-activity.html')
        const header = await page.locator('h2');
        await expect(header).toContainText('Show Transactions');
        
        await page.selectOption('#aa_accountId','2')
        const checkingAccount = await page.locator('#all_transactions_for_account tbody tr')
        await expect(checkingAccount).toHaveCount(3)

        await page.selectOption('#aa_accountId','4')
        const loanAccount = await page.locator('#all_transactions_for_account tbody tr')
        await expect(loanAccount).toHaveCount(2)

        await page.selectOption('#aa_accountId','6')
        const noResult = await page.locator('.well')
        await expect(noResult).toBeVisible()
    })
})