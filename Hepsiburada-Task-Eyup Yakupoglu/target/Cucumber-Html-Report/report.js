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
  "duration": 5967807701,
  "status": "passed"
});
formatter.match({
  "location": "BasketAndProfileScreenSteps.loginToHepsiburadaWebsite()"
});
formatter.result({
  "duration": 2899046132,
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
  "duration": 11581214007,
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003ca class\u003d\"link account-basket\" href\u003d\"/sepet\"\u003e...\u003c/a\u003e is not clickable at point (1268, 20). Other element would receive the click: \u003cdiv class\u003d\"toastrElement error\"\u003e...\u003c/div\u003e\n  (Session info: chrome\u003d107.0.5304.87)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Hakans-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:1c6a:55ee:b261:88e4%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.16\u0027, java.version: \u00271.8.0_282\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 107.0.5304.87, chrome: {chromedriverVersion: 107.0.5304.62 (1eec40d3a576..., userDataDir: /var/folders/jp/r9km4zv925g...}, goog:chromeOptions: {debuggerAddress: localhost:59666}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: a0010bc1840eb96172783cc9fb9e8cad\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\n\tat com.sun.proxy.$Proxy16.click(Unknown Source)\n\tat Pages.Functions.clickFunction(Functions.java:26)\n\tat Pages.BasketAndProfileScreenPage.searchAndAddToBasket(BasketAndProfileScreenPage.java:83)\n\tat StepDefinitions.BasketAndProfileScreenSteps.searchAndAddToBasket(BasketAndProfileScreenSteps.java:32)\n\tat ✽.Then The \"laptop\" is searched from the search textbox. First and third product added to cart(src/test/java/Features/BasketAndProfileScreen.Feature:8)\n",
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
  "duration": 1242070085,
  "status": "passed"
});
formatter.match({
  "location": "BasketAndProfileScreenSteps.loginToHepsiburadaWebsite()"
});
