import { Page } from '@playwright/test'
import { step } from '../helpers/test-step-decorator'
import { HelperBase } from './helper-base'

export class FormLayoutsPage extends HelperBase{
    
    constructor(page: Page) {
        super(page)
    }
    @step
    async submitUsingTheGridForm(email: string, password: string, optionText: string) {
        const usingTheGridForm = this.page.locator('nb-card', { hasText: "Using the Grid" })
        await usingTheGridForm.getByRole('textbox', { name: "Email" }).fill(email)
        await usingTheGridForm.getByRole('textbox', { name: "Password" }).fill(password)
        await usingTheGridForm.getByLabel(optionText).check({ force: true })
        await usingTheGridForm.getByRole('button', { name: "Sign in" }).click()
    }

    /**
     * This method submits inline form with user full name, email and remember me checkbox can be selected
     * @param fullName - Valid test user full name (First and last name)
     * @param email - Valid test user email
     * @param rememberMeCheckbox - Pass `true` to select Remember Me checkbox
     */
    @step
    async submitInlineForm(fullName: string, email: string, rememberMeCheckbox: boolean) {
        const inlineForm = this.page.locator('nb-card', { hasText: "Inline form" })
        await inlineForm.getByRole('textbox', { name: "Jane Doe" }).fill(fullName)
        await inlineForm.getByRole('textbox', { name: "Email" }).fill(email)
        if (rememberMeCheckbox) {
            await inlineForm.getByRole('checkbox').check({ force: true })
        }
        await inlineForm.getByRole('button', { name: "Submit" }).click()
    }

    /** 
     * This method submits the form with labels and placeholders with user full name, email and password
     * @param FirstName - Valid test user first name
     * @param LastName - Valid test user last name
     * @param Email - Valid test user email
     * @param Website - Valid test user website
     */
    @step
    async submitBlockForm(FirstName: string, LastName: string, Email: string, Website: string) {
        const formWithLabelsAndPlaceholders = this.page.locator('nb-card', { hasText: "Block Form" })
        await formWithLabelsAndPlaceholders.getByPlaceholder('First Name').fill(FirstName)
        await formWithLabelsAndPlaceholders.getByPlaceholder('Last Name').fill(LastName)
        await formWithLabelsAndPlaceholders.getByPlaceholder('Email').fill(Email)
        await formWithLabelsAndPlaceholders.getByPlaceholder('Website').fill(Website)
        await formWithLabelsAndPlaceholders.getByRole('button', { name: "Submit" }).click()
    }
}