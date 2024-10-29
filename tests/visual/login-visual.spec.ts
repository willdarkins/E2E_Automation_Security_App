import { test } from '@playwright/test'
import { HomePage } from '../../page-objects/HomePage'
import { LoginPage } from '../../page-objects/LoginPage'

test.describe.only('login page visual tests', () => {
    let homepage: HomePage
    let loginpage: LoginPage

    test.beforeEach(async ({ page }) => {
        homepage = new HomePage(page)
        loginpage = new LoginPage(page)

        await homepage.visit()
        await homepage.clickOnSignIn()
    })

    test('login form', async({ page }) => {
        await loginpage.snapshotLoginForm()
    })

    test('login error message', async({ page }) => {
        await loginpage.login('failusername', 'invalidpassword')
        await loginpage.snapshotErrorMessage()
    })
})