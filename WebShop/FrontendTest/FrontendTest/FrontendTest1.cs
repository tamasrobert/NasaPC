using System;
using System.Linq;
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using Xunit;

namespace FrontendTest
{
    public class FrontendTest1 : IDisposable
    {
        ChromeDriver driver;
        public FrontendTest1()
        {
            var x = new ChromeOptions();
            x.AddArguments("headless");
            this.driver = new ChromeDriver(x);
        }
        public void Dispose()
        {
            driver.Dispose();
        }

        [Fact]
        public void SignupTest()
        {
            System.Threading.Thread.Sleep(3000);
            driver.Navigate().GoToUrl("http://localhost:8080/signup");
            var inputName = driver.FindElement(By.XPath("//InputText[@id='name']"));
            inputName.SendKeys("Test Name");
            var inputEmail = driver.FindElement(By.XPath("//InputText[@id='email']"));
            inputEmail.SendKeys("raboczki.erik@students.jedlik.eu");
            var inputPassword = driver.FindElement(By.XPath("//Password[@id='password']"));
            inputPassword.SendKeys("asd");
            var inputDate = driver.FindElement(By.XPath("//Calendar[@id='date']"));
            inputDate.SendKeys();
            var inputAccept = driver.FindElement(By.XPath("//Checkbox[@id='accept']"));
            inputAccept.Click();


            var signupButton = driver.FindElement(By.XPath("//button[@id='signup']"));
            signupButton.Click();

            string DialogHeader = driver.FindElement(By.XPath("//h5[@id='DialogHeader']")).Text;

            Assert.Equal("Success!", DialogHeader);
        }

        [Fact]
        public void LoginTest()
        {
            System.Threading.Thread.Sleep(3000);
            driver.Navigate().GoToUrl("http://localhost:8080/login");
            var inputEmail = driver.FindElement(By.XPath("//input[@id='email']"));
            inputEmail.SendKeys("raboczki.erik@students.jedlik.eu");
            var inputPassword = driver.FindElement(By.XPath("//input[@id='password']"));
            inputPassword.SendKeys("asd");
            var loginButton = driver.FindElement(By.XPath("//button[@id='login']"));
            loginButton.Click();
            System.Threading.Thread.Sleep(5000);

            string destination = driver.Url;

            Assert.Equal("http://localhost:8080/", destination);
        }

        [Fact]
        public void ForgotPasswordTest()
        {
            System.Threading.Thread.Sleep(3000);
            driver.Navigate().GoToUrl("http://localhost:8080/login");
            var loginButton = driver.FindElement(By.XPath("//button[@id='forgetpassword']"));
            loginButton.Click();
            System.Threading.Thread.Sleep(5000);
            var inputForgotPasswordEmail = driver.FindElement(By.XPath("//input[@id='forgotpasswordemail']"));
            inputForgotPasswordEmail.SendKeys("raboczki.erik@students.jedlik.eu");
            var forgotPasswordSendRequest = driver.FindElement(By.XPath("//button[@id='forgotPasswordSendRequest']"));
            forgotPasswordSendRequest.Click();
            System.Threading.Thread.Sleep(5000);


            string DialogHeader = driver.FindElement(By.XPath("//h5[@id='DialogHeader']")).Text;

            Assert.Equal("Success!", DialogHeader);
        }

        [Fact]
        public void ProductsTest()
        {
            


            string DialogHeader = driver.FindElement(By.XPath("//h5[@id='DialogHeader']")).Text;

            Assert.Equal("Success!", DialogHeader);
        }




    }
}
