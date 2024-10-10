import { test, expect } from '@playwright/test'
import { loadHomepage, assertTitle } from '../helpers'

//Telling Playwright to open the browser and load the address in the link
test ('Simple basic test', async ( {page} ) => {
    await page.goto('https://www.example.com') //First we load the site by using 'goto' method
    const pageTitle = await page.locator('h1') //Then created variable to store a page element, and pass said element as a value
    await expect(pageTitle).toContainText('Example Domain') //now we're accessing the element and calling to expect it... then use 'toContainText' method and input the expected value
})

//Telling Playwright to click on elements of the page and expect an error message with values are blank for field, clicking 'log in' button
test ('Clicking on elements', async ({page})=> {
    await page.goto('http://zero.webappsecurity.com/index.html')
    await page.click('#signin_button') //clicking on sign in button 
    await page.click('text=Sign in') //clicking sign in button on next page

    const errorMessage = await page.locator('.alert-error') //since sign in values are blank by default, we're creating a variable to find the error message that will display once being clicked
    await expect (errorMessage).toContainText('Login and/or password are wrong.'); //error message is throwing and we're expecting the text passed as a value
    
})


test ('Selectors Testing @mytag', async ({page})=> {
    //selecting based on text
    await page.click('text=some text')

    //css selectors
    await page.click('button')
    await page.click('#id')
    await page.click('.class')

    //only visible css selectors - clicking on something that is only visible on screen
    await page.click('.submit-button:visible')

    //combinations
    await page.click('#user-name .first') //clicking on an element with and ID and user name shared

    //xpath - need to ask joe for more reference on this
    await page.click('//button')
})

test.describe.parallel.only('My first test suite', () => {
    test ('Working with inputs', async ({page})=> {
        const errorMessage = await page.locator('.alert-error')
        
        await page.goto('http://zero.webappsecurity.com/index.html')
        await page.click('#signin_button')
    
        await page.fill('#user_login', 'some username')
        await page.fill('#user_password', 'some password') //in the arguement, the first entry will represent the selector, while the second concerns the text
        await page.click('text=Sign in')
        await expect (errorMessage).toContainText('Login and/or password are wrong.'); //error message is throwing and we're expecting the text passed as a value
    })

    //asertions bascialy mean we're expecting something about the element to be true
    test ('working with assertions @mytag', async ({page})=> {
        await page.goto('https://example.com')
        await expect(page).toHaveURL('https://example.com')
        await expect(page).toHaveTitle('Example Domain')
    
        //making sure the h1 element is correctly displayed on the screen
        const element = await page.locator('h1')
        await expect(element).toBeVisible
        await expect (element).toHaveText('Example Domain')//a more strict assertion that the text listed is in fact part of the h1 element
        await expect (element).toHaveCount(1)//verifying there is in fact 1 h1 heading on the page
    
        //we can also verify certain elements are NOT visisble on the webpage
        //in this instance we're talking about the h5 heading...
        const nonExistingElement = await page.locator('h5')
        await expect (nonExistingElement).not.toBeVisible
        //*IMPORTANT* when working with an element, it needs to be stored in a varibale before being used in assertion
    })
})

test.describe ('hooks', () => {
    test.beforeEach(async ({ page })=> {
        await page.goto('https://example.com') //stating that before each of the tests run in this suite, I want to load the website
    })
    test ('screenshot', async ({ page }) => {
        await page.screenshot({path:'screenshot.png', fullPage: true}) //the path argument takes in what the file should be titled, and what part of the page should be captured
    })
    
    test ('single element screenshot', async ({ page })=> {
        const element = await page.$('h1')
        await element.screenshot({path:'single_element_screneshot.png'})
    })
})

test('custom helpers', async({page})=> {
    await loadHomepage(page)
    // await page.pause()
    await assertTitle(page)
})