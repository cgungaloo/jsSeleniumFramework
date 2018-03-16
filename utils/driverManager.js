var webdriver = require('selenium-webdriver');
var Builder = webdriver.Builder;
var config =require("..\\config\\config.js");

class DriverManage{

	async launchApplication(){
	 	
	 	if(config.browser ==="chrome"){
	 		global.driver = await new Builder().forBrowser('chrome').build();
	 	}else if(config.browser ==="firefox"){
	 		global.driver = await new Builder().forBrowser('firefox').build();
	 	}
	 	await driver.get(config.url);
	}
}
module.exports = new DriverManage();