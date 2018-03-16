var webdriver = require('selenium-webdriver');

var driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();

driver.get('http://www.thetestroom.com');

 // ./node_modules/.bin/cucumber-js -r features/step_definitions
