import Tab1Page from '../pageobjects/tab1.page'
import Tab1SuccessPage from '../pageobjects/tab1-success.page'

describe('auth form', () => {
    it('should be able to press on submit', async () => {
        await Tab1Page.open()
        await browser.setWindowSize(320, 568);
        const submitButton = await $(Tab1Page.submitButton)
        // This does not scroll element into view, causing element not interactable error
        await submitButton.click()

        const successMessage = await $(Tab1SuccessPage.successMessage)
        await successMessage.waitForDisplayed()
    })
})