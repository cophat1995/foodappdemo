import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { OrderPage } from '../../pages/order/order';
import { DataMenuPage } from '../../pages/menu/datamenu';

@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html'
})
export class MenuPage {
  menu;
  keys;
  Drink = this.datamenu.Drink;
  Mean = this.datamenu.Mean;
  orderList = [];
  constructor(public navCtrl: NavController, public datamenu :DataMenuPage) {
    this.menu = this.datamenu.menu;
  }
  selectOrder(){
    var sizeData = Object.keys(this.menu).length; 
    this.orderList = [];
    for( var i = 0; i < sizeData; i ++ )
    {
      var vt = this.menu[i].value; 
      for( var j = 0; j < vt.length; j ++ )
      {
        if(vt[j].checked == true)
          this.orderList.push(vt[j].title);
      }
    }
  }
  nextOrderPage(){
    this.selectOrder();
    this.navCtrl.push(OrderPage, {'orderList': this.orderList});
  }
}
