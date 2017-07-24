import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { EmailComposer } from '@ionic-native/email-composer';

import { HomePage } from '../pages/home/home';
import { MenuPage } from '../pages/menu/menu';
import { OrderPage } from '../pages/order/order';
import { TabsPage } from '../pages/tabs/tabs';
import { DataMenuPage } from '../pages/menu/datamenu';

@NgModule({
  declarations: [
    MyApp,
    MenuPage,
    OrderPage,
    HomePage,
    TabsPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MenuPage,
    OrderPage,
    HomePage,
    TabsPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},DataMenuPage,OrderPage,EmailComposer,
  ]
})
export class AppModule {}
