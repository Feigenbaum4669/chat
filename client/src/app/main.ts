import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';

declare global {
  interface Array<T> {
    flatMap<T, U>(mapFunc: (x: T) => U[]): U[];
  }
}

Array.prototype.flatMap = function<T, U>(mapFunc: (x: T) => U[]) : U[] {
  return this.reduce((cumulus: U[], next: T) => [...mapFunc(next), ...cumulus], <U[]> []);
};

platformBrowserDynamic().bootstrapModule(AppModule);
