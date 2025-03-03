Feature('user_story3');

Scenario('test something',  async({ I }) => {
    I.amOnPage('http://www.cupcakeipsum.com');
    I.see('Cupcake Ipsum - Sugar-coated Lorem Ipsum Generator');
    I.seeInField('Paragraphs','5');
    I.checkOption('SHORT');
    I.checkOption('"Cupcake ipsum dolor sit amet"');
    I.seeNumberOfVisibleElements('//span[contains(text(), "Cupcake ipsum dolor sit amet")]', 1);
    I.dontSeeElement('//button[contains(text(), "Copy to Clipboard")]');
    I.click('Generate');
    I.waitForElement('//p[contains(text(), "Cupcake ipsum dolor sit amet")]', 5);
    I.seeNumberOfVisibleElements('//span[contains(text(), "Cupcake ipsum dolor sit amet")] | //p[contains(text(), "Cupcake ipsum dolor sit amet")]', 2);
});
