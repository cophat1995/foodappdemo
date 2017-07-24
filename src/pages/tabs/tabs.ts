import {Component} from '@angular/core';
import {HomePage} from '../home/home';
import {MenuPage} from '../menu/menu';
import {OrderPage} from '../order/order';
import {NavController} from 'ionic-angular';
import {DataMenuPage} from '../../pages/menu/datamenu';

@Component({templateUrl: 'tabs.html'})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = MenuPage;
  //tab3Root = OrderPage;
  TAB;
  orderList = [];
  menu;
  constructor(public navCtrl : NavController, public datamenu : DataMenuPage) {
    this.menu = this.datamenu.menu;
    this.TAB = this.titleTab() + ' USD';
  }
  titleTab() {
    this.TAB = this
      .datamenu
      .MinMoneyMenu();
    /*this.TAB = "Culinary paradise";*/
    return this.TAB;
  }
  orderParams() {
    this.selectOrder();
    if (this.orderList == undefined) 
      this.orderList == [''];
    this
      .navCtrl
      .push(OrderPage, {'orderList': this.orderList});
  }
  selectOrder() {
    var sizeData = Object
      .keys(this.menu)
      .length;
    this.orderList = [];
    for (var i = 0; i < sizeData; i++) {
      var vt = this.menu[i].value;
      for (var j = 0; j < vt.length; j++) {
        if (vt[j].checked == true) 
          this.orderList.push(vt[j].title);
        }
      }
  }
}
