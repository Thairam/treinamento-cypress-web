const reporter = require("cucumber-html-reporter")

var options = {
  theme: 'bootstrap',
  jsonFile: 'cypress/cucumber-json/',
  output: "cypress/reports/report.html",
  reportSuiteAsScenarios: true,
  scenarioTimestamp: true,
  launchReport: false,
  metadata: {
    "Test Environment": "LOCAL",
    "Browser": "Chrome ",
    "Platform": "Windows 10",
    "Executed": "Local"
  }
}

reporter.generate(options)