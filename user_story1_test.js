Feature('user_story1');

Scenario('test something',  async({ I }) => {
    I.amOnPage('https://www.boardgamegeek.com/advsearch/boardgame.com/');
    I.fillField('Title',"Harry Potter and the Sorcerer's Stone Trivia Game");
    I.fillField('Year Released Minimum', '1999');
    I.fillField('Year Released Maximum', '2000');
    
    I.selectOption('Min Playing Time', '15 minutes');
    I.selectOption('Max Playing Time', '1.5 hours');

    I.click('Submit');


    I.waitForElement('//a[contains(text(), "Harry Potter") and contains(text(), "Trivia Game")]', 10);
    
    const linkText = await I.grabTextFrom('//a[contains(text(), "Harry Potter") and contains(text(), "Trivia Game")]');
    
    console.log('Game Found:', linkText);
});
