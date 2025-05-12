exports.DashboardPage = class DashboardPage {
  constructor(page) {
    this.page = page;
    this.sectionLink = (name) => page.locator(`text=${name}`);
  }
  async navigateTo(sectionName) {
    await this.sectionLink(sectionName).click();
  }
};