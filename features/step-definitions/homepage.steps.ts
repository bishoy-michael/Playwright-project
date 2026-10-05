import { Given, Then } from '@cucumber/cucumber'
import { expect } from '@playwright/test'
import { PlaywrightWorld } from '../support/world'

Given('I open the application', async function (this: PlaywrightWorld) {
    const url = process.env.BASE_URL ?? 'https://playground.bondaracademy.com'
    this.response = await this.page.goto(url, { waitUntil: 'domcontentloaded' })
})

Then('the page loads successfully', async function (this: PlaywrightWorld) {
    expect(this.response?.ok()).toBe(true)
    await expect(this.page).toHaveTitle(/.+/)
    const playgroundHeader = this.page.locator('.header-container').filter({ hasText: 'Playground' })
    await expect(playgroundHeader).toContainText('Playground')
})