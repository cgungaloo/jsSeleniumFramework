Feature: Home
	Scenario: Go to Google Home Page
		Given I am on the Home Page
		Then I should see the Google Search Button

	Scenario: Run a search
		Given I am on the Home Page
		When I enter the search word "webdriver"
		Then I should see the search results from "webdriver"