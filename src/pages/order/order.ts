import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {DataMenuPage} from '../../pages/menu/datamenu';
import {EmailComposer} from '@ionic-native/email-composer';

@Component({selector: 'page-order', templateUrl: 'order.html'})
export class OrderPage {
  menu;
  orderList = [];
  myOrder = [];
  sendList;
  sum = 0;

  constructor(private emailComposer : EmailComposer, public navCtrl : NavController, params : NavParams, public datamenu : DataMenuPage) {
    this.orderList = params.get('orderList');
    this.menu = this.datamenu.menu;
    this.order();
    this.sum = this.sumPrice();
  }
  order() {
    if (this.orderList == undefined) 
      this.orderList = [""];
    var sizeData = Object
      .keys(this.menu)
      .length;
    for (var j = 0; j < this.orderList.length; j++) {
      for (var i = 0; i < sizeData; i++) {
        var vt = this.menu[i].value;
        for (var z = 0; z < vt.length; z++) {
          if (vt[z].title == this.orderList[j]) 
            this.myOrder[j] = vt[z];
          }
        }
    }
    return this.myOrder;
  }
  sumPrice() {
    this.sum = 0;
    for (var i = 0; i < this.myOrder.length; i++) {
      var prices = parseInt(this.myOrder[i].price);
      var numbers = this.myOrder[i].number;
      this.sum += prices * numbers;
    }
    return this.sum;
  }
  sendListOrder() {
    this.sendList = "";
    for (var i = 0; i < this.myOrder.length; i++) {
      this.sendList += this.myOrder[i].title + "  :  " + this.myOrder[i].number + " <br\>";
    }
    return this.sendList;
  }
  sendMail() {
    this
      .emailComposer
      .isAvailable()
      .then(() => {
        this
          .emailComposer
          .open({
            to: 'cophat2801@gmail.com',
            subject: 'My Order !!!',
            body: this.sendListOrder(),
            isHtml: true
          });
      }, function () {
        alert("Can't send email. Please check your wifi connection or email account !!!")
      });
  }
}
