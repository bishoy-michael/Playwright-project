import { Page } from '@playwright/test'
import { NavigationPage } from '../pages/navigation-page'
import { FormLayoutsPage } from '../pages/form-layouts-page'
import { DatepickerPage } from '../pages/datepicker-page'

export class PageManager {

    readonly navigateTo: NavigationPage
    readonly formLayoutsPage: FormLayoutsPage
    readonly datepickerPage: DatepickerPage

    constructor(page: Page){
        this.navigateTo = new NavigationPage(page)
        this.formLayoutsPage = new FormLayoutsPage(page)
        this.datepickerPage = new DatepickerPage(page)
    }
}