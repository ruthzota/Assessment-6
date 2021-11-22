
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

const {playerRecord} = require('./server.js')


    test('Winner and loser to the fight', async() => {
        const compHealthAfterAttack = await driver.findElement(By.name('compHealthAfterAttack'))
        const playerHealthAfterAttack = await driver.findElement(By.name('playerHealthAfterAttack'))
        const called = compHealthAfterAttack > playerHealthAfterAttack
        expect(called).toContain('You lose');
    });
});




``