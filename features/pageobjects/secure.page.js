const { $ } = require('@wdio/globals')
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SecurePage extends Page {
    /**
     * define selectors using getter methods
     */
    get flashAlert() {
        return $('//a[@title="Vé máy bay Hà Nội - Sài Gòn (TP.HCM)"]');
    }

    async iVerifyTitleFlight () {

        return this.flashAlert.getText();
    }
}

module.exports = new SecurePage();
