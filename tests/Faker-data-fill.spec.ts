import {test} from '../fixture'
import { faker } from '@faker-js/faker'
import { expect } from '@playwright/test'

test('Fill Data with fake values', async ({ page, pom }) => {
    await pom.navigateTo.formLayoutsPage()
    const FirstName = faker.person.firstName()
    const LastName = faker.person.lastName()
    const RandomEmail = faker.internet.email({provider: 'notgmail.com'})
    const RandomWebsite = faker.internet.url()
    
    await pom.formLayoutsPage.submitBlockForm(process.env.FIRST_NAME || FirstName, LastName, RandomEmail, process.env.TEST_WEBSITE || RandomWebsite)
    await expect(page).toHaveURL(/\/pages\/forms\/layouts\/?$/)
})