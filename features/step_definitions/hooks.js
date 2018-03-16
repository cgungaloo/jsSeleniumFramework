var driverManage = require('../../utils/driverManager');
var{After,Before,setDefaultTimeout} = require('cucumber');
var sleep = require('thread-sleep');
setDefaultTimeout(60000);

Before(async function(){
	await console.log("I opened the browser");
	await driverManage.launchApplication();
});

After(async function(){
	await console.log("I closed the browser");
	await driver.close();
});