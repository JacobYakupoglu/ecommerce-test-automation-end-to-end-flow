$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/Features/BasketAndProfileScreen.Feature");
formatter.feature({
  "line": 1,
  "name": "Verifying whether related products are correctly added to the cart",
  "description": "",
  "id": "verifying-whether-related-products-are-correctly-added-to-the-cart",
  "keyword": "Feature"
});
formatter.background({
  "line": 3,
  "name": "Navigate to the website and login",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Navigate to the Trendyol website",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Login to Trendyol website",
  "keyword": "When "
});
formatter.match({
  "location": "BasketAndProfileScreenSteps.navigateToTheHepsiburadaWebsite()"
});
formatter.result({
  "duration": 7850814862,
  "status": "passed"
});
formatter.match({
  "location": "BasketAndProfileScreenSteps.loginToHepsiburadaWebsite()"
});
formatter.result({
  "duration": 5044915686,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "Adding products to the cart and checking the cart content",
  "description": "",
  "id": "verifying-whether-related-products-are-correctly-added-to-the-cart;adding-products-to-the-cart-and-checking-the-cart-content",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "The \"laptop\" is searched from the search textbox. First and third product added to cart",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "The quantity of any product in the basket is increased",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "laptop",
      "offset": 5
    }
  ],
  "location": "BasketAndProfileScreenSteps.searchAndAddToBasket(String)"
});
formatter.result({
  "duration": 20742578385,
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003ca class\u003d\"link account-basket\" href\u003d\"/sepet\"\u003e...\u003c/a\u003e is not clickable at point (1188, 20). Other element would receive the click: \u003cdiv class\u003d\"toastrElement error\"\u003e...\u003c/div\u003e\n  (Session info: chrome\u003d107.0.5304.87)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027MacBook-Pro-de-JacobYakupoglu.local\u0027, ip: \u0027fe80:0:0:0:1c6b:72b1:ce4b:e019%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.16\u0027, java.version: \u00271.8.0_231\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 107.0.5304.87, chrome: {chromedriverVersion: 107.0.5304.62 (1eec40d3a576..., userDataDir: /var/folders/2q/r_mq9z9j1zb...}, goog:chromeOptions: {debuggerAddress: localhost:50992}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 216a9bfbacb69bb70401c8bdc733af62\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\n\tat com.sun.proxy.$Proxy16.click(Unknown Source)\n\tat Pages.Functions.clickFunction(Functions.java:26)\n\tat Pages.BasketAndProfileScreenPage.searchAndAddToBasket(BasketAndProfileScreenPage.java:83)\n\tat StepDefinitions.BasketAndProfileScreenSteps.searchAndAddToBasket(BasketAndProfileScreenSteps.java:32)\n\tat ???.Then The \"laptop\" is searched from the search textbox. First and third product added to cart(src/test/java/Features/BasketAndProfileScreen.Feature:8)\n",
  "status": "failed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "line": 3,
  "name": "Navigate to the website and login",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Navigate to the Trendyol website",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Login to Trendyol website",
  "keyword": "When "
});
formatter.match({
  "location": "BasketAndProfileScreenSteps.navigateToTheHepsiburadaWebsite()"
});
formatter.result({
  "duration": 2775333019,
  "status": "passed"
});
formatter.match({
  "location": "BasketAndProfileScreenSteps.loginToHepsiburadaWebsite()"
});
formatter.result({
  "duration": 40172509401,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for element to be clickable: Proxy element for: DefaultElementLocator \u0027By.id: onetrust-accept-btn-handler\u0027 (tried for 15 second(s) with 500 milliseconds interval)\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:95)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\n\tat Pages.Functions.clickFunction(Functions.java:25)\n\tat Pages.BasketAndProfileScreenPage.loginToHepsiburada(BasketAndProfileScreenPage.java:46)\n\tat StepDefinitions.BasketAndProfileScreenSteps.loginToHepsiburadaWebsite(BasketAndProfileScreenSteps.java:25)\n\tat ???.When Login to Trendyol website(src/test/java/Features/BasketAndProfileScreen.Feature:5)\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#onetrust\\-accept\\-btn\\-handler\"}\n  (Session info: chrome\u003d107.0.5304.87)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027MacBook-Pro-de-JacobYakupoglu.local\u0027, ip: \u0027fe80:0:0:0:1c6b:72b1:ce4b:e019%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.16\u0027, java.version: \u00271.8.0_231\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 107.0.5304.87, chrome: {chromedriverVersion: 107.0.5304.62 (1eec40d3a576..., userDataDir: /var/folders/2q/r_mq9z9j1zb...}, goog:chromeOptions: {debuggerAddress: localhost:50992}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 216a9bfbacb69bb70401c8bdc733af62\n*** Element info: {Using\u003did, value\u003donetrust-accept-btn-handler}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy16.isDisplayed(Unknown Source)\n\tat org.openqa.selenium.support.ui.ExpectedConditions.elementIfVisible(ExpectedConditions.java:314)\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:43)\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:300)\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:297)\n\tat org.openqa.selenium.support.ui.ExpectedConditions$23.apply(ExpectedConditions.java:670)\n\tat org.openqa.selenium.support.ui.ExpectedConditions$23.apply(ExpectedConditions.java:666)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\n\tat Pages.Functions.clickFunction(Functions.java:25)\n\tat Pages.BasketAndProfileScreenPage.loginToHepsiburada(BasketAndProfileScreenPage.java:46)\n\tat StepDefinitions.BasketAndProfileScreenSteps.loginToHepsiburadaWebsite(BasketAndProfileScreenSteps.java:25)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\n\tat cucumber.runtime.model.CucumberScenario.runBackground(CucumberScenario.java:59)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:42)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater$1.execute(IdeaTestRunner.java:38)\n\tat com.intellij.rt.execution.junit.TestsRepeater.repeat(TestsRepeater.java:11)\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:35)\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:235)\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:54)\n",
  "status": "failed"
});
formatter.scenario({
  "line": 11,
  "name": "Updating profile informations",
  "description": "",
  "id": "verifying-whether-related-products-are-correctly-added-to-the-cart;updating-profile-informations",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "Click on my user information",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Date of birth is changed",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Click the update button and exit",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});