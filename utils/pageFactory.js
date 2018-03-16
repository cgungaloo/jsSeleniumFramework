var config = require('..\\config\\config.js');
var home_chrome = require('..\\PageModels\\home\\home_chrome');
var home_firefox =require('..\\PageModels\\home\\home_firefox');
var results_chrome =require('..\\PageModels\\results\\results_chrome');
var results_firefox =require('..\\PageModels\\results\\results_firefox');

class PageFactory{
	getHome(){
		if(config.browser ==="chrome"){
			return home_chrome;
		}else if(config.browser ==="firefox"){
			return home_firefox;
		}
	}

	getResult(){
		if(config.browser ==="chrome"){
			return results_chrome;
		}else if(config.browser ==="firefox"){
			return results_firefox;
		}
	}
}
module.exports = new PageFactory();