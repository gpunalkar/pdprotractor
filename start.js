var properties = require('./properties')
var startPage = function () {
    
    this.gotoURL = function () {
        return element(by.id(properties.gotoURL));
    }

    this.gotoButton = function () {
        return element(by.id(properties.gotoButton));
    }

    this.gotoButtonClick = function () {
        this.gotoButton().click();
    }
}

module.exports = new startPage();