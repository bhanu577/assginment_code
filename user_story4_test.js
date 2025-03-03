Feature('Test4');

Scenario('smaple',async({I})=>{
    I.amOnPage('https://opensource-demo.orangehrmlive.com');

    I.fillField('username','Admin');
    I.fillField('password','admin123');
    I.click('Login');
    I.waitForElement('//h6[text()="Dashboard"]', 10);
    I.see('Dashboard');
    I.click('//span[text()="Admin"]');
    I.click('//img[@class="oxd-userdropdown-img"]');
    I.see('About');
    I.see('Support');
    I.see('Change Password');
    I.see('Logout');
    I.click('//a[text()="Logout"]');
    I.waitForElement('//h5[text()="Login"]', 10);
    I.see('Login');
})