import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  slides = [
    {
      title: "Welcome to Res'House!",
      description: "The <b>Culinary paradise</b> This is my life.",
      image: "assets/image-home/cookie.jpg",
    },
    {
      title: "What is Res'House ?",
      description: "<b>Res'House</b> Noi cam xuc thang hoa.",
      image: "assets/image-home/berger.jpg",
    },
    {
      title: "Res'House",
      description: "The <b>Res'House</b> is a restaurant.",
      image: "assets/image-home/pizza.jpg",
    },
    {
      title: "Res'House",
      description: "Are you ready ?",
      image: "assets/image-home/tom.jpeg",
    }
  ];
}
