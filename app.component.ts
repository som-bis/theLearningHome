import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'blog';

  ngOnInit(){
    firebase.initializeApp({
    apiKey: "AIzaSyCgPuBuOg3VS8mAR8-a4DdACXHZIcdpEeI",
    authDomain: "blog-357e2.firebaseapp.com",
    databaseURL: "https://blog-357e2.firebaseio.com",
    projectId: "blog-357e2",
    storageBucket: "blog-357e2.appspot.com",
    messagingSenderId: "226928533610",
    appId: "1:226928533610:web:0ca8722f9fb6bab5bb6a13",
    measurementId: "G-8FLXD3QGNX"
    });
  }
}
