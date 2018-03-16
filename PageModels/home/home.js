var webdriver = require('selenium-webdriver');
var Page = require('..\\page');

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
		await searchbar.sendKeys(searchTerm);
    	await searchbar.sendKeys(sdriver.Key.ENTER);
	}
}
module.exports = Home;