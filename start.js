var properties = require('./properties');
var log = require('./log');
var startPage = function () {

    this.gotoURL = function () {
        browser.get(properties.gotoURL);
        log.info('Redirected to Serviceow Developer Site: ', new Date().toJSON());
    }

    this.gotoButton = function () {
        return element(by.id(properties.gotoButton));

    }

    this.gotoButtonClick = function () {
        this.gotoButton().click();
        log.info('Logged to Service Now Developer Site: ', ele, new Date().toJSON());
    }
}

module.exports = new startPage();