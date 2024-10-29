import { test } from '@playwright/test'
import { HomePage } from '../../page-objects/HomePage'
import { LoginPage } from '../../page-objects/LoginPage'

test.describe('login page visual tests', () => {
    let homepage: HomePage
    let loginpage: LoginPage

    test.beforeEach(async ({ page }) => {
        homepage = new HomePage(page)
        loginpage = new LoginPage(page)

        
    })
})