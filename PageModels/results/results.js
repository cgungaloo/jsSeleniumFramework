const {By, until} = require('selenium-webdriver');
sdriver = require('selenium-webdriver');
var Page = require('..\\page');


class Results extends Page{

	async checkSearchResults(searchTerm){
		await console.log("Checking search results for : "+ searchTerm);
		return await driver.wait(until.titleIs('webdriver - Google Search'), 5000);
	}

}
module.exports = Results;