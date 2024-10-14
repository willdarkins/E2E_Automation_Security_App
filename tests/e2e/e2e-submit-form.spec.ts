import { test, expect } from '@playwright/test'

test.describe('feedback form', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('http://zero.webappsecurity.com/')
        await page.click('#feedback')
    })
    // Reset feeback form
    test('reset feedback form', async ({ page }) => {
        await page.fill('#name', 'some name')
        await page.fill('#email', 'willdarkins@gmail.com')
        await page.fill('#subject', 'I am angry')
        await page.fill('#comment', 'Can someone please help me?')
        await page.click("input[name='clear']")

        const nameInput = await page.locator('#name')
        const emailInput = await page.locator('#email')
        const subjectInput = await page.locator('#subject')
        const commentInput = await page.locator('#comment')

        await expect(nameInput).toBeEmpty()
        await expect(emailInput).toBeEmpty()
        await expect(subjectInput).toBeEmpty()
        await expect(commentInput).toBeEmpty()

    })
    // Submit feeback form
})