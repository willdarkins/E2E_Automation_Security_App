import { test, expect } from '@playwright/test'

test.describe('login/logout flow', () => {
    //before hook to send to website for each test
    test.beforeEach(async ({page}) => {
        await page.goto('http://zero.webappsecurity.com/')
    })
    //negative scenario
    test('negative scneario for login', async ({page}) => {
        await page.click('#signin_button')
        await page.fill('#user_login', 'some username')
        await page.fill('#user_password', 'some password')
    })
    //positive scenario + logout
})