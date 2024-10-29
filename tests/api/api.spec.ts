import { test, expect } from '@playwright/test'

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
})