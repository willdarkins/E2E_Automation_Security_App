import { test, expect } from '@playwright/test'

//Below - You're passiong in 'testInfo' in order to get more information about tests run below
test.describe.only('Tips & Tricks seciton', () => {
    test('testInfo object', async ({ page }, testInfo) => {
        await page.goto('https://www.example.com')
        //console.log(testInfo)
    })
//You're passing the browser type as a variable and telling the function to skip running the test in Chrome
test('test skip browser', async ({ page, browserName }) => {
        test.skip(browserName === 'chromium', 'Feature not ready in Chrome browser')
        await page.goto('https://www.example.com')
})
})

