var numberOfRepeat = 15;

var page = {
    get: function (url) {
        browser.get(url)
    },
    byId: function (id) {
        return by.id(id)
    },
    click: function (by, i) {
        if (!i) {
            i = 1;
        }
        try {
            element(by).click().then(function () {
                console.log("Successfully clicked : " + by);
            }, function (err) {

                console.log("Retrying...");
                console.log("click " + by);
                if (i < numberOfRepeat) {
                    i = i + 1;
                    browser.sleep(500 * i);
                    page.click(by, i);
                } else {
                    browser.getCurrentUrl().then(function (url) {
                        console.log("Failed after " + i + " attempts waited for " + i * 500 + " milisecconds for element " + by + " ended on page " + url);
                        //Last try will fail the test:
                        element(by).click();
                    });
                }
            });
        }
        catch (err) {
            console.log('error occured');
        }
    },

    clickNth: function (by, index, i) {
        if (!i) {
            i = 1;
        }
        try {
            element.all(by).get(index).click().then(function () {
                console.log("Successfully clicked: " + by);

            }, function (err) {
                console.log("Retrying...");
                console.log("click " + by);
                if (i < numberOfRepeat) {
                    i = i + 1;
                    browser.sleep(500 * i);
                    page.clickNth(by, index, i);
                } else {
                    browser.getCurrentUrl().then(function (url) {
                        console.log("Failed after " + i + " attempts waited for " + i * 500 + " milisecconds for element " + by + " ended on page " + url);

                        //Last try will fail the test:
                        element.all(by).get(index).click();
                    });
                }
            });
        }
        catch (err) {
            console.log('error occured');
        }
    },

    getText: function (by, i) {
        if (!i) {
            i = 1;
        }
        try {
            return element(by).getText().then(function (text) {
                if (text == "" && i < numberOfRepeat) {
                    console.log("text not found trying again...");
                    console.log("getting text " + by);
                    i = i + 1;
                    browser.sleep(500 * i);
                    return page.getText(by, i);
                } else {
                    return text;
                }
            }, function (err) {

                console.log("Retrying...");
                console.log("getting text " + by);
                if (i < numberOfRepeat) {
                    i = i + 1;
                    browser.sleep(500 * i);
                    return page.getText(by, i);
                } else {
                    browser.getCurrentUrl().then(function (url) {
                        console.log("Failed after " + i + " attempts waited for " + i * 500 + " milisecconds for element " + by + " ended on page " + url);
                        return element(by).getText();
                    });
                }
            });
        }
        catch (err) {
            console.log('error occured');
        }
    },

    getNthText: function (by, index, i) {
        if (!i) {
            i = 1;
        }
        try {
            return element.all(by).get(index).getText().then(function (text) {
                if (text == "" && i < numberOfRepeat) {
                    console.log("text not found trying again...");
                    console.log("getting text " + by);
                    i = i + 1;
                    browser.sleep(500 * i);
                    return page.getNthText(by, index, i);
                } else {
                    return text;
                }
            }, function (err) {

                console.log("Retrying...");
                console.log("getting text " + by);
                if (i < numberOfRepeat) {
                    i = i + 1;
                    browser.sleep(500 * i);
                    return page.getNthText(by, index, i);

                } else {
                    browser.getCurrentUrl().then(function (url) {
                        console.log("Failed after " + i + " attempts waited for " + i * 500 + " milisecconds for element " + by + " ended on page " + url);
                        return element.all(by).get(index).getText();
                    });
                }
            });
        }
        catch (err) {
            console.log('error occured');
        }
    },

    type: function (by, text, i) {
        if (!i) {
            i = 1;
        }
        try {
            element(by).clear().then(function () {
                element(by).sendKeys(text);
                console.log("Successfully typed " + text + " in " + by);
            }, function (err) {

                console.log("Retrying...");
                console.log("type " + text + " in " + by);
                if (i < numberOfRepeat) {
                    i = i + 1;
                    browser.sleep(500 * i);
                    page.type(by, text, i);
                } else {
                    browser.getCurrentUrl().then(function (url) {
                        console.log("Failed after " + i + " attempts waited for " + i * 500 + " milisecconds for element " + by + " ended on page " + url);
                        element(by).sendKeys(text);
                    });
                }
            });
        }
        catch (err) {
            console.log('error occured');
        }
    },

    clickButtonByText: function (buttonText) {
        this.click(by.buttonText(buttonText));
    },

    clickElementByID: function (id) {
        this.click(by.id(id));
    },

    clickElementByName: function (name) {
        this.click(by.name(name));
    },

    clickElementByBinding: function (binding) {
        this.click(by.binding(binding));
    },

    clickElementByCSS: function (cssValue) {
        this.click(by.css(cssValue));
    },

    clickElementByModelValue: function (modelValue, index) {
        this.clickNth(by.model(modelValue), index);
    },

    clickElementByXpath: function (xpath) {
        this.click(by.xpath(xpath));
    },

    clickNthElementByCSS: function (cssValue, index) {
        this.clickNth(by.css(cssValue), index);
    },

    clickNthElementByModel: function (Model, index) {
        this.clickNth(by.model(Model), index);
    },

    clickNthElementByRepeater: function (repeaterValue, index) {
        this.clickNth(by.repeater(repeaterValue), index);
    },

    clickNthElementByLinkText: function (linkText, index) {
        this.clickNth(by.linkText(linkText), index);
    },

    clickNthElementByPartialLinkText: function (linkText, index) {
        this.clickNth(by.partialLinkText(linkText), index);
    },

    clickNthElementByXpath: function (xpath, index) {
        this.clickNth(by.xpath(xpath), index);
    },

    clickElementByLink: function (linkText) {
        this.click(by.linkText(linkText));
    },

    clickElementByModel: function (modelValue) {
        this.click(by.model(modelValue));
    },

    clickElementByText: function (cssValue, textValue) {
        elms = element.all(by.css(cssValue));
        elms.then(function (elems) {
            for (var i = 0; i < elems.length; i++) {
                elms.get(i).then(function (elm) {
                    elm.getText().then(function (txt) {
                        console.log(textValue + "    " + txt);
                        if (textValue == txt) {
                            elm.click();
                        }
                    });
                });
            }
        });
    },

    expectNumberOfPopUpWindows: function (numberOfWindows) {
        browser.getAllWindowHandles().then(function (handles) {
            expect(handles.length).toEqual(numberOfWindows + 1);
        });
    },

    getBrowserURL: function () {
        return browser.getCurrentUrl();
    },

    getCookieExpirationDate: function (cookieName, cookieValue) {
        var cookieExpiryDate = browser.manage().getCookie(cookieName).then(function (cookie) {
            var date = new Date(cookie.expiry * 1000);
            console.log("Date 2: " + date.toUTCString());
            return date.toUTCString();
        });
        return cookieExpiryDate;
    },

    getArrayByElementAttributeCSS: function (css, attributeValue) {
        //Needs to be updated this is just a temp work around for now
        return this.getElementTextByCSS(css).then(function (text) {
            var attributeArray = element.all(by.css(css)).map(function (elm) {
                return elm.getAttribute(attributeValue);
            });
            return attributeArray;
        });
    },

    getArrayByElementAttributeXpath: function (xpath, attributeValue) {
        //Needs to be updated this is just a temp work around for now
        return this.getElementTextByXpath(xpath).then(function (text) {
            var attributeArray = element.all(by.xpath(xpath)).map(function (elm) {
                return elm.getAttribute(attributeValue);
            });
            return attributeArray;
        });
    },

    getElementByBinding: function (Value) {
        return element(by.binding(Value));
    },

    getElementByCSS: function (cssValue) {
        return element.all(by.css(cssValue)).get(0);
    },

    getElementById: function (id) {
        return element(by.id(id));
    },

    getElementByModel: function (modelValue) {
        browser.ignoreSynchronization = false;
        elem = element(by.model(modelValue));
        browser.ignoreSynchronization = true;
        return elem;
    },

    getElementByXpath: function (xpath) {
        return element.all(by.xpath(xpath)).get(0);
    },

    getElementTextByCSS: function (cssValue) {
        return this.getText(by.css(cssValue));
    },

    getElementTextByBinding: function (Value) {
        return this.getText(by.binding(Value));
    },

    getElementTextByButtonText: function (Value) {
        return this.getText(by.buttonText(Value));
    },

    getElementTextByLinkText: function (Value) {
        return this.getText(by.linkText(Value));
    },

    getElementTextByModel: function (modelValue) {
        return this.getText(by.model(modelValue));
    },

    getElementTextByXpath: function (xpath) {
        return this.getText(by.xpath(xpath), 0);
    },

    getElementTextById: function (id) {
        return this.getText(by.id(id), 0);
    },

    isElementVisibleByCSS: function (css) {
        return element(by.css(css)).isDisplayed().then(function (displayed) {
            console.log("Is " + css + " Displayed: " + displayed);
            return displayed;
        });
    },

    getElementTextByReapeter: function (reapeter) {
        return this.getText(by.repeater(reapeter), 0);
    },

    getElementsByCSS: function (cssValue) {
        browser.ignoreSynchronization = false;
        elms = element.all(by.css(cssValue));
        browser.ignoreSynchronization = true;
        return elms;
    },

    getElementsTextByCSS: function (cssValue) {
        return element.all(by.css(cssValue)).getText();
    },

    getElementsLengthByRepeater: function (repeater) {
        return element.all(by.repeater(repeater)).then(function (elms) {
            return elms.length;
        });
    },

    getElementsLengthByCSS: function (CSSValue) {
        return element.all(by.css(CSSValue)).then(function (elms) {
            return elms.length;
        });
    },

    getNthElementByCSS: function (cssValue, index) {
        browser.ignoreSynchronization = false;
        elm = element.all(by.css(cssValue)).get(index);
        browser.ignoreSynchronization = true;
        return elm;
    },

    getNthElementByBinding: function (BindingName, index) {
        return element.all(by.binding(BindingName)).get(index);
    },

    getNthElementByModel: function (modelName, index) {
        browser.ignoreSynchronization = false;
        elm = element.all(by.model(modelName)).get(index);
        browser.ignoreSynchronization = true;
        return elm;
    },

    getNthElementByRepeater: function (repeaterValue, rowNumber) {
        return element(by.repeater(repeaterValue).row(rowNumber));
    },

    getNthElementByXpath: function (xpath, index) {
        browser.ignoreSynchronization = false;
        elm = element.all(by.css(xpath)).get(index);
        browser.ignoreSynchronization = true;
        return elm;
    },

    getNthElementTextByCSS: function (cssValue, n) {
        return this.getNthText(by.css(cssValue), n, 0);
    },

    getNthElementTextByBinding: function (bindValue, n) {
        return this.getNthText(by.binding(bindValue), n, 0);
    },

    getNthElementTextByModel: function (modelValue, n) {
        return this.getNthText(by.model(modelValue), n, 0);
    },

    getNthElementTextByRepeater: function (Value, n) {
        return this.getNthText(by.repeater(Value), n, 0);
    },

    getValueInFieldByModel: function (modelName) {
        return element(by.model(modelName)).getAttribute('value');
    },

    getValueInFieldByCSS: function (cssValue) {
        return element(by.css(cssValue)).getAttribute('value');
    },

    hasClassFindByXPath: function (xpath, classname) {
        browser.ignoreSynchronization = false;
        browser.waitForAngular();
        return element(by.xpath(xpath)).getAttribute('class').then(function (classes) {
            browser.ignoreSynchronization = true;
            return classes.split(' ').indexOf(classname) !== -1;
        });
    },

    isElementDisplayedByCSS: function (cssValue) {
        return element(by.css(cssValue)).isDisplayed();
    },

    isElementDisplayedByBinding: function (bind) {
        return element(by.binding(bind)).isDisplayed();
    },

    isElementPresentByBinding: function (bind) {
        return element(by.binding(bind)).isPresent();
    },

    isElementPresentByLinkText: function (value) {
        return element(by.linkText(value)).isPresent();
    },

    isElementPresentByCSS: function (cssValue) {
        return element(by.css(cssValue)).isPresent();
    },

    isElementPresentByXpath: function (xpath) {
        return element(by.xpath(xpath)).isPresent();
    },

    isElementDisplayedByXpath: function (xpath) {
        return element(by.xpath(xpath)).isDisplayed();
    },

    isTextAvailable: function (cssValue, textValue) {
        webelement = page.getElementByCSS(cssValue);
        webelement.getText().then(function (text) {
            console.log("+++++++++++++++" + text);
            expect(text).toContain(textValue);
        });
    },

    isTextAvailableByModel: function (modelName, textValue) {
        webelement = page.getElementByModel(modelName);
        webelement.getText().then(function (text) {
            expect(text).toContain(textValue);
        })
    },

    mouseOverElementById: function (id) {
        browser.actions().mouseMove(element(by.id(id))).perform();
    },

    pause: function (time) {
        browser.sleep(time * 1000);
    },

    setBrowserMaximize: function () {
        browser.driver.manage().window().maximize();
    },

    setBrowserClose: function () {
        browser.close();
    },

    selectOptionByText: function (parentSelect, text) {
        parentSelect.element(by.cssContainingText('option', text)).click();
    },

    selectOptionByModelWithLabel: function (selectModel, optionLabel) {
        var dropdown = element(by.model(selectModel));
        return dropdown.$("[label='" + optionLabel + "']").click();
    },

    setBrowserURL: function (URL) {
        browser.driver.get(URL);
    },

    typeValueInFieldByCSS: function (cssValue, value) {
        this.type(by.css(cssValue), value);
    },

    typeValueInFieldByName: function (name, value) {
        this.type(by.name(name), value);
    },

    typeValueInFieldByModel: function (modelName, value) {
        this.type(by.model(modelName), value);
    },

    typeValueInFieldByID: function (id, value) {
        this.type(by.id(id), value);
    },

    verifyCookieValue: function (cookieName, cookieValue) {
        browser.manage().getCookie(cookieName).then(function (cookie) {
            expect(cookie.value).toContain(cookieValue);
        });
    },

    selectElementByRepeater: function (repeaterValue, rowNumber) {
        element.all(by.repeater(repeaterValue).row(rowNumber)).click();
    },

    selectElementByModel: function (modelValue) {
        return element(by.model(modelValue));
    },

    clickElementByBindingValue: function (bind, value) {
        element.all(by.binding(bind)).get(value).click();
    },

    clickSelectedElementByBinding: function (bindingValue, textValue) {
        element.all(by.binding(bindingValue)).then(function (elms) {
            elms.forEach(function (ele, i) {
                ele.getText().then(function (txt) {
                    if (textValue == txt) {
                        ele.click();
                    }
                });
            });
        });
    },

    clickSelectedElementByRepeater: function (repeaterValue, textValue) {
        element.all(by.repeater(repeaterValue)).then(function (elms) {
            elms.forEach(function (ele, i) {
                ele.getText().then(function (txt) {
                    if (textValue == txt) {
                        ele.click();
                    }
                });
            });
        });
    },

    clickPartialMatchElementByRepeater: function (repeaterValue, textValue) {
        element.all(by.repeater(repeaterValue)).then(function (elms) {
            elms.forEach(function (ele, i) {
                ele.getText().then(function (txt) {
                    if (txt.includes(textValue)) {
                        ele.click();
                    }
                });
            });
        });
    },

    getElementByLink: function (linkText) {
        return element(by.linkText(linkText));
    },

    getPageSource: function () {
        return browser.getPageSource();
    },

    getCookie: function (cookieTag) {
        return browser.manage().getCookie(cookieTag);
    },

    setCookie: function (cookieTag, value) {
        browser.manage().addCookie(cookieTag, value);
    },

    getCookieValue: function (cookieTag) {
        return browser.manage().getCookie(cookieTag).then(function (cookie) {
            console.log(cookie.value);
            return cookie.value;
        });
    },

    clickSelectedElementByCSS: function (CSS, textValue) {
        element.all(by.css(CSS)).then(function (elms) {
            elms.forEach(function (ele, i) {
                ele.getText().then(function (txt) {
                    if (textValue == txt) {
                        ele.click();
                    }
                });
            });
        });
    },

    getAttributesByCSS: function (cssValue, attributeValue) {
        elems = element(by.css(cssValue)).getAttribute(attributeValue);
        elems.then(function (print) {
            console.log(print);
        });
        return elems;
    },

    clickNthElementByBinding: function (Value, index) {
        this.clickNth(by.binding(Value), index);
    },

    mouseOverByCSS: function (cssValue) {
        browser.actions().mouseMove(element(by.css(cssValue))).perform();
    },

    closeAdditionalWindow: function (index) {
        page.pause(3);
        browser.getAllWindowHandles().then(function (handles) {
            if (handles[1] != null) {
                browser.driver.switchTo().window(handles[index]);
                browser.driver.close();
                console.log("additional window closed successfully");
                browser.driver.switchTo().window(handles[0]);
            }
        });
    }
};

module.exports = page;