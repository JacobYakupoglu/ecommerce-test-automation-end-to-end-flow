package Pages;

import Config.ConfigurationReader;
import Utilities.Driver;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Set;

public abstract class Functions {

    public WebDriver driver = Driver.getDriver();
    WebDriverWait wait = new WebDriverWait(driver, 15);

    public void clickFunction(WebElement clickElement) {
        wait.until(ExpectedConditions.elementToBeClickable(clickElement));
        clickElement.click();
    }

    public void sendKeysFunction(WebElement sendKeysElement, String value) {
        wait.until(ExpectedConditions.visibilityOf(sendKeysElement));
        sendKeysElement.sendKeys(value);
    }

    public void mouseHoverFunction() {
        Actions actions = new Actions(driver);
        WebElement menu = driver.findElement(By.cssSelector(ConfigurationReader.getProperty("loginHover")));
        actions.moveToElement(menu).perform();
        driver.findElement(By.cssSelector(ConfigurationReader.getProperty("loginButton"))).click();
    }

    public void assertingTexts(String actualResult, String expectedResult) {
        Assert.assertEquals(actualResult, expectedResult);
    }

    public void scrollUpDown() {
        WebElement element = driver.findElement(By.cssSelector(ConfigurationReader.getProperty("scrollDown")));
        ((JavascriptExecutor) driver).executeScript("arguments[0].scrollIntoView(true);", element);
    }

    public void switchToWindow(Integer window) {
        ArrayList<String> tab = new ArrayList<String> (driver.getWindowHandles());
        driver.switchTo().window(tab.get(window));
    }
}
