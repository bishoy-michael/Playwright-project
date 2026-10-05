import { Given, Then, When } from '@cucumber/cucumber'
import { expect } from '@playwright/test'
import { PlaywrightWorld } from '../support/world'

Given('I am on the login page', async function (this: PlaywrightWorld) {
    const baseUrl = process.env.BASE_URL ?? 'https://playground.bondaracademy.com'
    await this.page.goto(new URL('/auth/login', baseUrl).toString(), { waitUntil: 'domcontentloaded' })
    await expect(this.page.getByRole('heading', { name: 'Login' })).toBeVisible()
})

When('I log in with valid credentials', async function (this: PlaywrightWorld) {
    const email = process.env.EMAIL
    const password = process.env.PASSWORD

    if (!email || !password) {
        throw new Error('Set EMAIL and PASSWORD in .env to run the login scenario.')
    }

    await this.page.getByLabel('Email address').fill(email)
    await this.page.getByLabel('Password').fill(password)
    await this.page.getByRole('button', { name: /log in/i }).click()
})

Then('I should reach the application', async function (this: PlaywrightWorld) {
    await expect(this.page).not.toHaveURL(/\/auth\/login/)
    await expect(this.page).toHaveURL(/\/pages\/iot-dashboard/)
})