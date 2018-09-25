import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import * as firebase from 'firebase';

var config = {
  apiKey: "AIzaSyAyDROFpRrrjXnTTK40IojzLhEmbAgEjBI",
  authDomain: "bulletinboard-c8748.firebaseapp.com",
  databaseURL: "https://bulletinboard-c8748.firebaseio.com",
  projectId: "bulletinboard-c8748",
  storageBucket: "bulletinboard-c8748.appspot.com",
  messagingSenderId: "673198240037"
};

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    firebase.initializeApp(config);
  }
}
