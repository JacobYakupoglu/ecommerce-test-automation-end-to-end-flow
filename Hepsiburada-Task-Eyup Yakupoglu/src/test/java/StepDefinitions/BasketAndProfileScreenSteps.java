package StepDefinitions;

import Pages.BasketAndProfileScreenPage;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.WebDriver;

import java.util.concurrent.TimeUnit;

public class BasketAndProfileScreenSteps {

    BasketAndProfileScreenPage basketAndProfileScreenPage = new BasketAndProfileScreenPage();
    private WebDriver driver;

    @Given("^Navigate to the Trendyol website$")
    public void navigateToTheHepsiburadaWebsite() {

        basketAndProfileScreenPage.navigateToHepsiburada();
    }

    @When("^Login to Trendyol website$")
    public void loginToHepsiburadaWebsite() {

        basketAndProfileScreenPage.loginToHepsiburada();

    }

    @Then("^The \"([^\"]*)\" is searched from the search textbox\\. First and third product added to cart$")
    public void searchAndAddToBasket(String searchedText) throws InterruptedException {

        basketAndProfileScreenPage.searchAndAddToBasket(searchedText);
    }
}