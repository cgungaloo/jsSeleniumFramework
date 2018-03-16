var webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const firefox = require('selenium-webdriver/firefox');
const {Builder, By, Key, until} = require('selenium-webdriver');
var config =require("..\\config\\config.js");

class DriverManage{

	async launchApplication(){
	 	
		const screen = await {
  			width: 640,
  			height: 480
		};

	 	if(config.browser ==="chrome"){
	 		if(config.headless ===true){
	 			global.driver = await new Builder()
	 			.forBrowser('chrome')
	 			.setChromeOptions(new chrome.Options().headless().windowSize(screen))
	 			.build();
	 		}else{
	 			global.driver = await new Builder().forBrowser('chrome').build();
	 		}
	 	}else if(config.browser ==="firefox"){
	 		if(config.headless ===true){
	 			global.driver = await new Builder()
	 			.forBrowser('firefox')
	 			.setFirefoxOptions( new firefox.Options().headless().windowSize(screen))
	 			.build();
	 		}else{
	 			global.driver = await new Builder().forBrowser('firefox').build();
	 		}
	 	}
	 	await driver.get(config.url);
	}
}
module.exports = new DriverManage();