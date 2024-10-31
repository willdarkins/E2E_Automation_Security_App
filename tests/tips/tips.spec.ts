import { test, expect } from '@playwright/test'

//Below - You're passiong in 'testInfo' in order to get more information about tests run below
test.describe.only('Tips & Tricks seciton', () => {
    test('testInfo object', async ({ page }, testInfo) => {
        await page.goto('https://www.example.com')
        console.log(testInfo)
    })
})