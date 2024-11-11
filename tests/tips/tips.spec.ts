import { test, expect } from '@playwright/test'

//Below - You're passiong in 'testInfo' in order to get more information about tests run below
test.describe('Tips & Tricks seciton', () => {
    test('testInfo object', async ({ page }, testInfo) => {
        await page.goto('https://www.example.com')
        //console.log(testInfo)
    })
//You're passing the browser type as a variable and telling the function to skip running the test in Chrome
    test('test skip browser', async ({ page, browserName }) => {
        test.skip(browserName === 'chromium', 'Feature not ready in Chrome browser')
        await page.goto('https://www.example.com')
    })
//Indicating there is an issue with the test code itself and the test should be skipped
    test('test fix me annotation', async ({ page, browserName }) => {
        test.fixme(browserName === 'chromium', 'Test is not stable and needs revision')
        await page.goto('https://www.example.com')
    })

//Creating an array variable to pass into the for loop below which allows us to search for the array values
//the #searchTerm is a selector for search box - We're filling box with values from array
    const people = ['Mike', 'Judy', 'Peter', 'Will', 'Alice']
    for(const name of people) {
        test.only(`running test for ${name}`, async ({ page }) => {
            await page.goto('http://zero.webappsecurity.com/index.html')
            await page.fill('#searchTerm', `${name}`)
            await page.waitForTimeout(3000)
        })
    }
})