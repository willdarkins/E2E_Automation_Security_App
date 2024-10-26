import { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
    timeout: 60000, //miliseconds you want run for a playwright test to finish
    retries: 0, //How many times you want playwright to rerun failed tests
    //'use' is for specific settings you want to apply to the environment
    testDir: 'tests/visual',
    use: {
        viewport: {width: 1280, height: 720}, //what dimension the screen should be in
        actionTimeout: 15000, //setting the maximum time allowed for an action to complete before it is considered a failure
        ignoreHTTPSErrors: true,
        video: 'off', //take a video on test fail
        screenshot: 'off', //take a screenshot on test
    },
    projects: [
        {
            name: 'Chromium',
            use: {browserName: 'chromium'}
        },
        {
            name: 'Firefox',
            use: {browserName:'firefox'}
        },
        {
            name: 'Webkit',
            use: {browserName: 'webkit'}
        }
    ]
}

export default config