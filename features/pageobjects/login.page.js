const { $ } = require('@wdio/globals')
const Page = require('./page');
const { allowedNodeEnvironmentFlags } = require('process');
const { clear } = require('console');



/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {



    /**
     * define selectors using getter methods
     */
    get clickDestinationFrom () {
        return $('//div[input[@name="From"]]');
    }

    

    get clickDestinationTo () {
        return $('//div[input[@name="To"]]');
    }

    get inputDestinationFrom () {
        return $('//input[@data-id="flight_from" and @spellcheck="false"]');
    }

    get selectDestinationFrom () {
        return $('//strong[text()="HAN"]');
    }

    get selectDestinationTo() {
        return $('//strong[text()="SGN"]');
    }

    

    get inputDestinationTo () {
        return $('//input[@data-id="flight_to" and @spellcheck="false"]');
    }

    get clickDateFrom () {
        return $('//div[input[@id="departure_date_flight"]]');
    }

    get selectDateFrom () {
        return $('//td[contains(@class,"today")]');
    }

    get clickDateTo () {
        return $('//div[input[@id="returning_date_flight"]]');
    }

    get selectDateTo () {
        return $('//td[contains(@class,"today")]//following::td[4]');
    }

    get clickPassenger () {
        return $('//div[input[contains(@class,"flight_passenger")]]');
    }

    get clickBtnQuantityPass () {
        return $('//input[@name="is_search_cheapest"]//following::span[contains(text(),"2-12 tuổi")]//ancestor::div[@class="row"]//div[@data-type="plus"]');
    }

    get clickSearchFlight () {
        return $('#search_button');
    }



    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async iChooseDestination () {
        
    
        await this.clickDestinationFrom.click();
        await this.inputDestinationFrom.setValue("HAN");
        await this.selectDestinationFrom.click();
    
        await this.clickDestinationTo.click();
        
        await this.inputDestinationTo.setValue("SGN");
        
        await this.selectDestinationTo.click();
    
        
    }

    async iChooseTime () {
        await this.clickDateFrom.click();
        await this.selectDateFrom.click();
        await this.clickDateTo.click();
        await this.selectDateTo.click();


       
    }

    async iChoosePeople () {
        // await browser.pause(3000); 
          
        await this.clickPassenger.click();
        await browser.pause(3000); 
        await this.clickBtnQuantityPass.click();


        
    }

    async iSearchFlight () {

        await this.clickSearchFlight.click();

        await browser.pause(5000);   
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open();
    }
}

module.exports = new HomePage();
  