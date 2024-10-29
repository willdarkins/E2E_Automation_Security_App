import { test, expect, request } from '@playwright/test'

test.describe.parallel('api testing', () => {
    const baseUrl = 'https://reqres.in/api' //creating variable for baseurl where api is being called
    //test below is meant to assert we can successfully find a user based on the endpoint
    test('simple api test - assert response status', async ({ request }) => {
        const response = await request.get(`${baseUrl}/users/2`) //using template literal to input variable to request call
        expect(response.status()).toBe(200) //making sure the response is successful
    })
    //this test is meant to verify we CANNOT find said user in endpoint
    test('simple api test - assert invalid endpoint', async ({ request }) => {
        const response = await request.get(`${baseUrl}/users/poop_pants`)
        expect(response.status()).toBe(404)
    })

    test('GET request - get user details', async ({ request }) => {
        const response = await request.get(`${baseUrl}/users/1`)
        const responseBody = JSON.parse(await response.text()) //variable that parses JSON data into readable text on our end

        expect(response.status()).toBe(200) //asserts the call to be successful
        expect(responseBody.data.id).toBe(1) //asserts the id of the endpoint user we're hitting is "1"... look at the response variable to make the connection
        expect(responseBody.data.first_name).toBe('George') //using the function 'toBe' because we're asserting values in API, not actual text
        expect(responseBody.data.last_name).toBe('Bluth')
        expect(responseBody.data.email).toBeTruthy() //verifying there is any value at all for the email address of the user being tapped in question

        // console.log(responseBody)
        //running the console.log to being in order to see the data and get more info about it
    })

    test('POST request - create new user', async ({ request }) => {
        const response = await request.post(`${baseUrl}/users`, {
            data: {
                id:1003,
                name: 'Fuck Stick',
                job: 'fucking shit up'
            } 
        })
        const responseBody = JSON.parse(await response.text())
        // console.log(responseBody)
        //running the console.log to being in order to see the data and get more info about it

        expect(response.status()).toBe(201)
        expect(responseBody.id).toBe(1003)
        expect(responseBody.createdAt).toBeTruthy() //asserting a timestamp will be created... can't be specific because you don't know the moment
    })

    test('POST request - Login', async ({ request }) => {
        const response = await request.post(`${baseUrl}/login`, {
            data: {
                email: 'eve.holt@reqres.in',
                password: 'cityslicka'
            }
        })
        const responseBody = JSON.parse(await response.text())
        expect(response.status()).toBe(200)
        expect(responseBody.token).toBeTruthy()
        //Not adding in the login data because we're only confirming the idea someone can successfully login
    })

    test('POST request - login fail', async({ request }) => {
        const response = await request.post(`${baseUrl}/login`, {
            data: {
                email: 'this.guy@gmail.com'
            }
        })
        const responseBody = JSON.parse(await response.text())
        expect(response.status()).toBe(400)
        expect(responseBody.error).toBe('Missing password')
    })
})