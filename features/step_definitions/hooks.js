var driverManage = require('../../utils/driverManager');
var{After,Before,setDefaultTimeout} = require('cucumber');
setDefaultTimeout(50000);

Before(async function(){
	await driverManage.launchApplication();
});

After(async function(){
	await driver.close();
});