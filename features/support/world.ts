import { World, setWorldConstructor } from '@cucumber/cucumber'
import type { Browser, Page, Response } from '@playwright/test'

export class PlaywrightWorld extends World {
    browser!: Browser
    page!: Page
    response: Response | null = null
}

setWorldConstructor(PlaywrightWorld)