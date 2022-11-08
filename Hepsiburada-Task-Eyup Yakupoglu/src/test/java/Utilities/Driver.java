package Utilities;

import org.junit.After;
import org.junit.Before;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;


public class Driver {

    private static WebDriver driver;

    @Before
    public static WebDriver getDriver()
    {
        if (driver == null)
        {
            System.setProperty("webdriver.chrome.driver", System.getProperty("user.dir") + "/src/main/resources/chromedriver");
            driver = new ChromeDriver();
        }
        return driver;
    }

    @After
    public static void closeDriver()
    {
        if (driver != null)
        {
            driver.close();
            driver = null;
        }
    }
}
