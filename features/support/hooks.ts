import { After, Before, setDefaultTimeout } from '@cucumber/cucumber'
import { chromium } from '@playwright/test'
import { config as loadEnv } from 'dotenv'
import { resolve } from 'node:path'
import { PlaywrightWorld } from './world'

loadEnv({ path: resolve(process.cwd(), '.env') })
setDefaultTimeout(30_000)

Before(async function (this: PlaywrightWorld) {
    this.browser = await chromium.launch()
    const context = await this.browser.newContext()
    this.page = await context.newPage()
})

After(async function (this: PlaywrightWorld) {
    await this.browser?.close()
})