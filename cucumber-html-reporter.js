const report = require("multiple-cucumber-html-reporter")

report.generate({
  jsonDir: "cypress/cucumber-json",
  reportPath: "cypress/reports/cucumber",
  storeScreenshots: true,
  noInlineScreenshots: true,
  metadata: {
    browser: {
      name: "chrome",
      version: "97",
    },
    device: "Local test machine",
    platform: {
      name: "windows",
      version: "10",
    },
  },
})