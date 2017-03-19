import { browser, element, by } from 'protractor';

export class ClientPage {
  navigateTo() {
    return browser.get('/');
  }

  getAppTitle() {
    return element(by.css('md-card-title')).getText();
  }
}
