import { Injectable } from '@angular/core';

@Injectable()
export class SettingsService {
  private altBackground = false;

  setBackground = (isAlt: boolean) => (this.altBackground = isAlt);

  isAltBackground = () => this.altBackground;

  getBackground = () => this.altBackground ? 'altToolbarBackground' : 'toolbarBackground';

  getTextColor = () => this.altBackground ? 'blueFont' : 'whiteFont';
}
