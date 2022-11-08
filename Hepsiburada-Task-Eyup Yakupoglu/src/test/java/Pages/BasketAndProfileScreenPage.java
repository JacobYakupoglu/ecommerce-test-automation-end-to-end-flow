package Pages;

import Config.ConfigurationReader;
import Utilities.Driver;
import cucumber.api.java.en.Then;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.concurrent.TimeUnit;

public class BasketAndProfileScreenPage extends Functions {

    WebDriver driver;

    public BasketAndProfileScreenPage() {

        driver = Driver.getDriver();
        PageFactory.initElements(driver, this);
    }

    public void navigateToHepsiburada() {

        driver = Driver.getDriver();
        driver.manage().window().maximize();
        driver.get(ConfigurationReader.getProperty("baseUrl"));
        driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
    }

    @FindBy(id = "onetrust-accept-btn-handler")
    private WebElement acceptButton;

    @FindBy(id = "login-email")
    private WebElement email;

    @FindBy(id = "login-password-input")
    private WebElement passwordTextbox;

    @FindBy(css = "button[class='q-primary q-fluid q-button-medium q-button submit']")
    private WebElement submitButton;

    public void loginToHepsiburada() {

        clickFunction(acceptButton);
        mouseHoverFunction();
        sendKeysFunction(email,ConfigurationReader.getProperty("email"));
        sendKeysFunction(passwordTextbox,ConfigurationReader.getProperty("password"));
        clickFunction(submitButton);
    }

    @FindBy(css = "input[data-testid='suggestion']")
    private WebElement searchTextbox;

    @FindBy(css = "i[data-testid='search-icon']")
    private WebElement searchButton;

    @FindBy(css = "div[data-id='134117208']")
    private WebElement firstProduct;

    @FindBy(css = "div[class='product-button-container']")
    private WebElement addingToBasket;

    @FindBy(css = "h1[class='pr-new-br']")
    private WebElement laptopDescription;

    @FindBy(css = "p[class='pb-item']//*[@span]")
    private WebElement productInBasketDescription;

    @FindBy(css = "a[class='link account-basket']")
    private WebElement myBasket;

    public void searchAndAddToBasket(String searchedText) throws InterruptedException {
        Thread.sleep(5000);
        sendKeysFunction(searchTextbox,searchedText);
        clickFunction(searchButton);
        clickFunction(firstProduct);
        switchToWindow(1);
        String laptopDesc = laptopDescription.getText();
        scrollUpDown();
        clickFunction(addingToBasket);
        clickFunction(myBasket);
       assertingTexts(laptopDesc,productInBasketDescription.getText());

    }

    @FindBy(css = "button[class='ty-numeric-counter-button passive']")
    private WebElement increaseQuantity;

    @Then("^The quantity of any product in the basket is increased$")
    public void quantityOfAnyProductInBasketIsIncreased() {

       clickFunction(increaseQuantity);

    }
}