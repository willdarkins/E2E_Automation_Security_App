import { test } from '@playwright/test'
import { HomePage } from '../../page-objects/HomePage'
import { FeedbackPage } from '../../page-objects/FeedbackPage'

test.describe('feedback form', () => {
   let homePage: HomePage
   let feedbackPage: FeedbackPage
   
    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page)
        feedbackPage = new FeedbackPage(page)

        await homePage.visit()
        await homePage.clickOnFeedbackLink()
    })
    // Reset feeback form
    test('reset feedback form', async ({ page }) => {
        await feedbackPage.formFill('Will', 'willdarkins@gmail.com', 'derp', 'herp-de-derp')
        await feedbackPage.clearForm()
        await feedbackPage.assertReset()
    })
    // Submit feeback form
    test('submit feedback form', async ({ page }) => {
        await feedbackPage.formFill('Will', 'willdarkins@gmail.com', 'derp', 'herp-de-derp')
        await feedbackPage.submitForm()
        await feedbackPage.feedbackFormSent()
    })
})