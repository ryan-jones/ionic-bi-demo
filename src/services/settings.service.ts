import { Injectable } from '@angular/core';

@Injectable()
export class SettingsService {
  private altBackground = false;

  public setBackground = (isAlt: boolean): boolean => (this.altBackground = isAlt);

  public isAltBackground = (): boolean => this.altBackground;

  public getBackground = (): string => this.altBackground ? 'altToolbarBackground' : 'toolbarBackground';

  public getTextColor = (): string => this.altBackground ? 'blueFont' : 'whiteFont';
}
