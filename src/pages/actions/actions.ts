import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../home/home';


@Component({
  selector: 'page-actions',
  templateUrl: 'actions.html',
})
export class ActionsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ActionsPage');
  }
  click1(){
    console.log('ActionsPage->Button->PUSH_HomePage');
    this.navCtrl.push(HomePage);
      }
  click2(){
    console.log('ActionsPage->Button->SetPages');
    this.navCtrl.setPages;
      }
  click3(){
    console.log('ActionsPage->Button->SetRoot');
    this.navCtrl.setRoot(this.navCtrl.getActive().component);
      }
  click4(){
    console.log('ActionsPage->Button->PopToRoot');
    this.navCtrl.popToRoot();
      }
  click5(){
    console.log('ActionsPage->Button->PopTo_HomePage');
    this.navCtrl.popTo(HomePage);
      }
  click7(){
    console.log('ActionsPage->Button->setRoot_HomePage');
    this.navCtrl.setRoot(HomePage);
      }
  click6(){
    console.log('ActionsPage->Button->Duration');
    this.navCtrl.push(HomePage, null , {
      duration: 5000,
    });
      }
}
