import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: string = 'RetasPage';

  pages: Array<{title: string, component: string}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Retas', component: 'RetasPage' },
      { title: 'Anti-Aliasing', component: 'AntiAliasingPage' },
      { title: 'Tranlação', component: 'TranslacaoPage' },
      { title: 'Rotação', component: 'RotacaoPage' },
      { title: 'Escalonamento', component: 'EscalonamentoPage' },
      { title: 'Cisalhamento', component: 'CisalhamentoPage' },
      { title: 'Poligono Único', component: 'PoligonoPage' },
      { title: 'Poligono Ambíguo', component: 'PoligonoAmbiguoPage' }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
