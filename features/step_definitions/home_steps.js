'use strict';
var webdriver = require('selenium-webdriver');
var config =require("..\\..\\config\\config.js");
var page_factory = require("..\\..\\utils\\pageFactory");
var {Given,When,Then,And} = require('cucumber')
var assert = require('chai').assert;
var home;
var result;

	Given('I am on the Home Page',async function(){
        await console.log("Running Given I am on the Home Page");
        home = page_factory.getHome();

        var mailLink = await home.checkMailLink();

        await mailLink.getText("value").then(async function(text){
            await console.log("Gmail link is : "+text)
            assert.equal("Gmail",text);
         });
    });
    	
    Then('I should see the Google Search Button',async function(){
    	 await console.log("Running I should see the Google Search Button");  
         var buttontxt =await home.checkSearchButtonIsPresent();
         await buttontxt.getAttribute("value").then(async function(text){
            await console.log("Search Button is : "+ text)
            assert.equal("Google Search",text);
         });
  	});

    When('I enter the search word {string}',async function(searchterm){
        await console.log("Running I enter the search word {string}");  
        await console.log("Search item : " +searchterm)
        await home.searchForItem(searchterm);
    });

    Then('I should see the search results from {string}', async function(searchterm){
        await console.log("Running I should see the search results from {string}");  
        await console.log("Checking search item for : "+searchterm);
        result = await page_factory.getResult();
        assert(true ,result.checkSearchResults(searchterm));
    });