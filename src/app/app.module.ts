import { FormhistoryPage } from './../pages/formhistory/formhistory';
import { UseevaluationPage } from './../pages/useevaluation/useevaluation';
import { CreateitemPage } from './../pages/createitem/createitem';
import { CreateclassPage } from './../pages/createclass/createclass';
import { MainclassPage } from './../pages/mainclass/mainclass';
import { CreateformPage } from './../pages/createform/createform';
import { PreviewformPage } from './../pages/previewform/previewform';
import { LoginPage } from './../pages/login/login';
import { WelcomePage } from './../pages/welcome/welcome';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

// import { Welcome } from '../pages/welcome/welcome';
// import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    WelcomePage,
    LoginPage,
    FormhistoryPage,
    PreviewformPage,
    CreateformPage,
    MainclassPage,
    CreateclassPage,
    CreateitemPage,
    SignupPage,
    AboutPage,
    ContactPage,
    UseevaluationPage,
    
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    WelcomePage,
    LoginPage,
    PreviewformPage,
    CreateformPage,
    MainclassPage,
    CreateclassPage,
    CreateitemPage,
    SignupPage,
    AboutPage,
    ContactPage,
    UseevaluationPage,
    FormhistoryPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
