import {Injectable}  from    '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()

export class DataMenuPage {
  menu = {};
  menuList;
  Drink = [
    {
      id: 1,
      img: "assets/image-home/sona1.jpg",
      title: "Mon an nay k an dc!!!",
      details: 'la mon an ma chua rat nhieu chat bo duong nen khong the an dc',
      number: 1,
      price: 1,
      checked: false
    }, {
      id: 2,
      img: "assets/image-home/sona2.jpg",
      title: "Mon chay",
      details: 'la mon an ma chua rat nhieu do chay',
      number: 1,
      price: 2,
      checked: false
    }, {
      id: 3,
      img: "assets/image-home/sona3.jpg",
      title: "Mon chay co thit",
      details: 'la mon an ma chua rat nhieu thit mac du la do an chay',
      number: 1,
      price: 3,
      checked: false
    }, {
      id: 4,
      img: "assets/image-home/sona1.jpg",
      title: "Berger",
      details: 'la mon an ma chua rat nhieu thit mac du la do an chay',
      number: 1,
      price: 4,
      checked: false
    }
  ];
  Mean = [
        {
          id: 5,
          img: "assets/image-home/sona1.jpg",
          title: "Mon an dc!!!",
          details: 'la mon an ma chua rat nhieu chat bo duong nen khong the an dc',
          number: 1,
          price: 5,
          checked: false
        }, {
          id: 6,
          img: "assets/image-home/sona2.jpg",
          title: "Chay",
          details: ' nhieu do chay',
          number: 1,
          price: 6,
          checked: false
        }, {
          id: 7,
          img: "assets/image-home/sona3.jpg",
          title: "Thit",
          details: 'la mon an ma chua rat nhieu thit mac du la do an chay',
          number: 1,
          price: 7,
          checked: false
        }
      ];
  constructor() { 
    this.menu = [
      {name:"Drink",
       value: this.Drink},
    
     { name: "Mean",
        value: this.Mean}]
  }
  MinMoneyMenu(){
    var s = Object.keys(this.menu);
    var sizeData = Object.keys(this.menu).length; 
    this.menuList = 0;
    for( var i = 0; i < sizeData; i ++ )
    {
      var vt = this.menu[s[i]]; 
      for( var j = 0; j < vt.length; j ++ )
      {
          this.menuList += vt[j].price;
      }
    }
    return this.menuList;
  }
}