import Page from './page'

class Tab1Page extends Page {

    submitButton = '[data-check="form-submit"]';

    open () {
        return super.open('tabs/tab1')
    }
}

export default new Tab1Page()