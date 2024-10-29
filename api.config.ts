import { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
    timeout: 60000,
    retries: 0,
    testDir: 'tests/api', //location of where your tests are running
    use: {
        viewport: {width: 1280, height: 720}, //what dimension the screen should be in
        actionTimeout: 10000, //setting the maximum time allowed for an action to complete before it is considered a failure
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