package Runners;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = {"src/test/java/Features/BasketAndProfileScreen.Feature"},
        glue={"StepDefinitions"},
        plugin = {"pretty",
                "json:target/Cucumber-Report/cucumber.json",
                "html:target/cucumber-Report/cucumber.html"},
        monochrome = true
)

public class Runner {

}