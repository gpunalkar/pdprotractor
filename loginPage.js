'use strict';
var properties = require('./properties');
var driver = require('./driver');
var log = require('./log');

var loginPage = function () {

    this.userName = function () {
        //retrun.browser.findElement(by.id(properties.sdUsername));

        return dirver.byId(properties.sdUsername);
    }

    this.password = function () {
        retrun.browser.findElement(by.id(properties.sdPassword));
    }

    this.setUserName = function (text) {
       // this.userName().sendKeys(text);
       driver.type(this.userName(),text,1)
    }

    this.setPassword = function (text) {
        //this.password().sendKeys(text);
        driver.type(this.password(),text,1)
    }

    this.submitButton = function () {
        return element(by.id(properties.submitButton));
        this.submitButton().click();
        log.info('Logged to Service Now Developer Site: ', ele, new Date().toJSON());
    }
}

module.export = new loginPage;