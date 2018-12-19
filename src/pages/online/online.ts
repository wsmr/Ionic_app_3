import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NetworkServiceProvider } from '../../providers/network-service/network-service';
import { OnlineStatusService, OnlineStatusType } from 'ngx-online-status';
import { InAppBrowser } from '@ionic-native/in-app-browser';

//import { OfflinePage } from '../offline/offline';
//import { HomePage } from '../home/home';
//import { timeout } from 'rxjs/operators';

@Component({
  selector: 'page-online',
  templateUrl: 'online.html',
  providers: [NetworkServiceProvider],
})
export class OnlinePage {

  disconnectSubscription: any;
  status: OnlineStatusType;
  data: string;
//  time: boolean;
  time = new Boolean(true);

  constructor(
    private iab: InAppBrowser,
    private onlineStatusService: OnlineStatusService,
    public navCtrl: NavController, 
    public navParams: NavParams
    ) {

    }

ionViewDidLoad() {
    console.log('OnlinePage->ionViewDidLoad');
    /*                                 
     */
  }
 ionViewWillEnter(){
//     setTimeout(() => {
         console.log('OnlinePage->ionViewEnter');
//         this.navCtrl.popToRoot();
//     }, 2500);
   }
ngOnInit(){
    console.log("OnlinePage->ng-on-init->setTimeout");
    console.log((this.time));
    if(this.time) {
      setTimeout(
        () =>{
          console.log("OnlinePage->ng-on-init->if-->this.time = true");
          console.log((this.time));
          this.time = false;
          console.log("OnlinePage->ng-on-init->this.time = false"); 
        }, 5000);
  } else {
    console.log("OnlinePage->ng-on-init->else-->this.time = false");
    this.time = true;
    console.log("OnlinePage->ng-on-init->this.time = true");
//    const browser = this.iab.create('http://google.com/','_self',{location:'no'});
    this.ngOnInit();
    };
  }
}
