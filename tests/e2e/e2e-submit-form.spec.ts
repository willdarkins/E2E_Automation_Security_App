import { test, expect } from '@playwright/test'

test.describe('feedback form', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('http://zero.webappsecurity.com/')
        await page.click('#feedback')
    })
    
})