'use strict';
// To support JavaScript project this need to define  
var log = require('./log');
var startPage = require('./start');
var startPage = require('./loginPage');

browser.ignoreSynchronization = true;

describe("Starting Personal ServiceNow Developer", function () {

	it("Redirecting to ServiceNow Developer Site", function () {
		// browser.get("https://developer.servicenow.com/app.do");
		startPage.gotoURL();
		
	});

	it("Logging to Service Now Developer Site", function () {
		browser.sleep(12000);
		// var ele = element(by.id('dp-hdr-login-link'))
		// ele.click();
		startPage.gotoButtonClick();
	});

	it("Logging to ServiceNow Developer Enviornment", function () {
		browser.sleep(12000);
		// element(by.id("username")).sendKeys("ganesh.punalkar@gmail.com");
		// element(by.id("password")).sendKeys("G@ne2019");
		// element(by.id("submitButton")).click();
		// log.info('Logged to ServiceNow Developer Enviornment: ', new Date().toJSON());
		loginPage.submitButton();
	});

	it("Wakeing up ServiceNow Developer Instance", function () {
		browser.sleep(12000);
		
		var wake = element(by.xpath("//*[@id='instance_detail']/a"));
		wake.click();
		log.info('Wakeed up ServiceNow Developer Instance: ', wake, new Date().toJSON());
	});

	it("Logging to ServiceNow Developer Instance: ", function () {
		browser.sleep(12000);
		browser.getAllWindowHandles().then(function(handles){
			browser.switchTo().window(handles[1]).then(function(){
				element(by.id("username")).sendKeys("admin");
				element(by.id("password")).sendKeys("G@ne2019");
				element(by.id("submitButton")).click();
				log.info('Loging to ServiceNow Developer Instance: ', new Date().toJSON());
			});
		});		
	});

	// browser.navigateTo();

	it("Wait", function () {
		browser.sleep(12000);
		log.info('Waiting', new Date().toJSON());
	});

	/* it("Check Validation Message", function () {
	   browser.sleep(12000);

	   var spanmsg = browser.findElement(by.xpath("//*[@id='errorPlaceholder']"));
	   spanmsg.getText().then(function (text) {
		   console.log(text);
		   log.info('Messages is: ', text, new Date().toJSON());
	   }, function(reason){
		   log.info('Username & Password Wrong: ', new Date().toJSON());
	   }); */
});