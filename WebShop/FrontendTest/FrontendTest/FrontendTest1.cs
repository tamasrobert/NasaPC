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
            //x.AddArguments("headless");
            this.driver = new ChromeDriver(x);
        }
        public void Dispose()
        {
            driver.Dispose();
        }

        [Fact]
        public void SignupTest()
        {
            System.Threading.Thread.Sleep(1000);
            driver.Navigate().GoToUrl("http://localhost:8080/signup");
            var inputName = driver.FindElement(By.XPath("//input[@id='name']"));
            inputName.SendKeys("Test Name");
            var inputEmail = driver.FindElement(By.XPath("//input[@id='email']"));
            inputEmail.SendKeys("raboczki.erik@students.jedlik.eu");
            var inputPassword = driver.FindElement(By.XPath("//input[@id='password']"));
            inputPassword.SendKeys("asd");
            var inputDate = driver.FindElement(By.XPath("//input[@id='date']"));
            inputDate.SendKeys("04/03/2022");
            var inputAccept = driver.FindElement(By.XPath("//div[@class='p-checkbox p-component']"));
            inputAccept.Click();


            var signupButton = driver.FindElement(By.XPath("//button[@id='signup']"));
            signupButton.Click();
            System.Threading.Thread.Sleep(2000);

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
            System.Threading.Thread.Sleep(3000);
            driver.Navigate().GoToUrl("http://localhost:8080/products");

            var selectedItemCart = driver.FindElement(By.XPath("//button[@id='62615a5407b9781aa86fb5ebcart']"));
            selectedItemCart.Click();
            var selectedItemWishList = driver.FindElement(By.XPath("//button[@id='62615a5407b9781aa86fb5ebwish']"));
            selectedItemWishList.Click();

        }

        [Fact]
        public void CartTest()
        {
            System.Threading.Thread.Sleep(55000);
            driver.Navigate().GoToUrl("http://localhost:8080/cart");

            var buttonPlus = driver.FindElement(By.XPath("//button[@id='62615a5407b9781aa86fb5ebplus']"));
            buttonPlus.Click();
            buttonPlus.Click();
            buttonPlus.Click();
            var buttonMinus = driver.FindElement(By.XPath("//button[@id='62615a5407b9781aa86fb5ebminus']"));
            buttonMinus.Click();

            var quantityh6 = driver.FindElement(By.XPath("//h6[@id='62615a5407b9781aa86fb5ebquantityh6']")).Text;

            Assert.Equal("Quantity: 2", quantityh6);
        }

        [Fact]
        public void WishListTest()
        {
            System.Threading.Thread.Sleep(5000);
            driver.Navigate().GoToUrl("http://localhost:8080/account/wishlist");

            var wishListItem = driver.FindElement(By.XPath("//h6[@id='62615a5407b9781aa86fb5ebname']")).Text;

            Assert.Equal("ASUS ROG STRIX B450-F GAMING II", wishListItem);

            var buttonRemove = driver.FindElement(By.XPath("//button[@id='62615a5407b9781aa86fb5ebremove']"));
            buttonRemove.Click();
        }




    }
}
