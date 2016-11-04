import { NeoPage } from './app.po';
import {by, element, browser, protractor, $} from "protractor";

describe('neo App', function() {
  // let page: NeoPage;

  var EC = protractor.ExpectedConditions;

  beforeEach(() => {
    // browser.ignoreSynchronization = true;
    // page = new NeoPage();
  });

  it('should display title as Génie3', () => {

    browser.ignoreSynchronization = true;

    browser.get('/').then(() => {
      browser.getTitle().then(title => expect(title).toEqual('Génie3'));
    });
  });

  it('should be able to log in', () => {

    browser.wait(EC.visibilityOf($('#username')), 5 * 1000, 'username input should be visible');
    browser.wait(EC.visibilityOf($('#password')), 5 * 1000, 'password input should be visible');

    element(by.id('username')).sendKeys('ken@zdg.ca');
    element(by.id('password')).sendKeys('123nekken');

    element(by.id('form-login')).submit();

    browser.wait(EC.urlContains('/home'), 5000, 'should be redirected to home').then(() => {
      console.log("Got home!");
    }, ()=> {
      console.log("Hmmm... this is not home!");
    });
  });

  it('should be able to add a product', () => {

    browser.get('/products').then(() => {
      browser.wait(EC.visibilityOf($('#btn-add-product')), 5 * 1000, 'add a product button should be visible');

      $('#btn-add-product').click();

      browser.wait(EC.visibilityOf($('#sku')), 5 * 1000, 'sku input field should be visible');
      browser.wait(EC.visibilityOf($('#title')), 5 * 1000, 'title input field should be visible');

      $('#sku').sendKeys('000000000999');
      $('#title').sendKeys('Bananes de la floride');

      $('#form-add-product').submit();

      browser.wait(EC.invisibilityOf($('#modal-add-product')), 5 * 1000, 'form should be invisible');
      browser.wait(EC.visibilityOf($('#SKU000000000999')), 5 * 1000, 'item should be visible in table');

    });
  });
});
