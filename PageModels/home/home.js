var webdriver = require('selenium-webdriver');
var Page = require('..\\page');
var sleep = require('thread-sleep');
const {By, until} = require('selenium-webdriver');
sdriver = require('selenium-webdriver');

class Home extends Page{

	async checkSearchButtonIsPresent(){
		await console.log("getting search button");
		var searchButton = await this.getElementByName("btnK");
		return searchButton;
	}

	async checkMailLink(){
		await console.log("getting mail link");
		var mailLink = await this.getElementByClassName("gb_P");
		return mailLink;
	}

	async searchForItem(searchTerm){
		await console.log("Searching for : " + searchTerm);
		var searchbar = await driver.findElement(By.name('q'));
		await console.log("Looking for : q ");
		await searchbar.sendKeys(searchTerm);
		await console.log("Sent Keys ");
    	await searchbar.sendKeys(sdriver.Key.ENTER);
    	await console.log("Pressed Enter ");
		sleep(6000);
	}
}
module.exports = Home;