import { Component } from '@angular/core';

import {initializeApp, database} from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello World Angular 2!';

  constructor() {

      var config = {
    apiKey: "AIzaSyCIA-TBV9a8RvaRgHkfjL9BgumtBleqN5Q",
    authDomain: "fir-project-e4c92.firebaseapp.com",
    databaseURL: "https://fir-project-e4c92.firebaseio.com",
    storageBucket: "fir-project-e4c92.appspot.com",
    messagingSenderId: "852769832406"
  };

  initializeApp(config);

  var root = database().ref('messages/2');

  root.on('value', function(snap){

  console.log(snap.key,snap.val());

  });

  }
}
