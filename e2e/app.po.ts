import { browser, element, by } from 'protractor';

export class NeoPage {
  navigateTo() {
    browser.ignoreSynchronization = true;
    return browser.get('/auth');
  }

  login(){

  }

  getTitle() {
    return browser.getTitle();
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
