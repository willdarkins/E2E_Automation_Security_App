import { test, expect } from '@playwright/test'

//This test allows for your to create an initial snapshot and send to associated folder
///First test will fail because it's expecting something there - but will pass after a snapshot is taken, then compared
test.describe('visual regression testing', () => {
    test('full page snapshot', async ({ page }) => {
        await page.goto('http://zero.webappsecurity.com/index.html')
        expect(await page.screenshot()).toMatchSnapshot('homepage.png')
    })
})