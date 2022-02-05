Feature: Sample feature file to illustrate app and browser tests

  @androidApp @androidBS @androidBSP
  Scenario: Launch and tap on Get Started
    Given I launch the app
    When I click on Get Started
    Then I should see pop up

  @iosApp
  Scenario: Launch Settings app of an iphone
    Given I launch the settings app of iphone
    Then I should see the general label

  @androidBrowser @iosBrowser
  Scenario: Launch the google url in browser
    Given I launch the google
    Then I verify the title to be Google
