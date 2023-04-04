export class DarkThemeServise {

  private key = 'Theme'

  private static instance: DarkThemeServise;

  static getInstance() {
    if (!this.instance) {
      this.instance = new DarkThemeServise();
    }
    return this.instance;
  }

  seveTheme() {
    localStorage.setItem(this.key, 'true');
  }
  removeTheme() {
    localStorage.removeItem(this.key);
  }
  getTheme() {
    return localStorage.getItem(this.key) === 'true';
  }
}