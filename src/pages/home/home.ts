import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { OnInit } from '@angular/core';


 import { NewpagePage } from '../newpage/newpage';
 import { NetworkPage } from '../network/network';
 import { RefreshPage } from '../refresh/refresh';
 import { EventPage } from '../event/event';
 import { ViewController } from 'ionic-angular';
 import { OnlinePage } from '../online/online';
 import { ActionsPage } from '../actions/actions';
 import { HideheaderPage } from '../hideheader/hideheader';
import { LoadPage } from '../load/load';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{

//  tab1Root:any = NewpagePage;
//  tab2Root:any = ContactPage;

data1: string;
data2: any;

  constructor(
    private viewCtrl: ViewController,
    public navCtrl: NavController,
    private iab: InAppBrowser
    ) {
      console.log("home-page->Constructor");
    }
  ionViewWillEnter() {                                     /*this will run (just enter the home page) without calling the home page*/
      console.log('home-page->ionViewWillEnter');
      this.data2 = this.viewCtrl.showBackButton(true);
//      this.navCtrl.setRoot(this.navCtrl.getActive().component);  /*this will refresh infinite loop the home page*/
//      console.log('home-page->ionViewWillEnter->setRoot');
    }
  ionViewDidLoad() {
      console.log('home-page->ionViewDidLoad');
      this.data1=this.navCtrl.getActive().component.name;    
    }
  
  ngOnInit(){
    console.log("home-page->ng-On-Init");
    }
   
  // IF LAZY-LOADED
  click1(){
    this.navCtrl.push(NewpagePage);
      }
  // IF LAZY-LOADED
  click2(){
    this.navCtrl.push(RefreshPage);
      }
      // IF LAZY-LOADED
  click3(){
    this.navCtrl.push(NetworkPage);
      }
  // IF LAZY-LOADED
  click4(){
    this.navCtrl.push(EventPage);
      }
  click5(){
    this.navCtrl.push(ActionsPage);
      }
  click6(){
    this.navCtrl.push(HideheaderPage);
      }
  click7(){
    this.navCtrl.push(LoadPage);
      }
  online(){
      this.navCtrl.push(OnlinePage);
    }

}
