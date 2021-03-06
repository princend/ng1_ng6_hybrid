import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { UpgradeModule, downgradeComponent } from '@angular/upgrade/static';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmptyComponent } from './empty/empty.component';
import { TestComponent } from './test/test.component';
import * as ng from 'node_modules/angular'
@NgModule({
  declarations: [
    AppComponent,
    EmptyComponent,
    TestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UpgradeModule
  ],
  entryComponents: [
    AppComponent
  ],
  providers: [],
})
export class AppModule {
  constructor(private upgrade: UpgradeModule) {

  }

  ngDoBootstrap(appRef: ApplicationRef) {
    /**ng1 */
    this.upgrade.bootstrap(document.documentElement, ['myApp']);
    /** ng2_up */
    appRef.bootstrap(AppComponent);
  }
}

/**將元件降級 */
ng.module('myApp').directive(
  'test', downgradeComponent({ component: TestComponent })
)


