var webdriver = require('selenium-webdriver');
var By = webdriver.By;
var until =webdriver.until;
var config =require("..\\config\\config.js");
var driveManager = require("..\\utils\\driverManager");

class Page{
	async getElementByName(name){
		console.log("Getting : " +name);
		var elem = await driver.wait(until.elementLocated(By.name(name)),5000,'Could not locate the child element within the time specified');

		return elem;
	}

	async getElementByClassName(classname){
		console.log("Getting : " +classname);
		var elem = await driver.findElement(By.className(classname));

		return elem;
	}
}
module.exports = Page;