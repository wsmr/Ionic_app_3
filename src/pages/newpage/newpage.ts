import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OnlineStatusService, OnlineStatusType } from 'ngx-online-status';
import { OfflinePage } from '../offline/offline';
import { OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Platform } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-newpage',
  templateUrl: 'newpage.html',
})
export class NewpagePage implements OnInit{

  status: OnlineStatusType;
  data: string;

  constructor(
    public platform: Platform, 
    private iab: InAppBrowser,
    private onlineStatusService: OnlineStatusService,
    public navCtrl: NavController, 
    public navParams: NavParams
    ) {
      if(!navigator.onLine){
        this.navCtrl.push(OfflinePage);
        }
      this.onlineStatusService.status.subscribe((status: OnlineStatusType) => {
        this.status = status;
      if(!this.status && this.navCtrl.getActive().component.name === 'NewpagePage'){
        this.navCtrl.push(OfflinePage);
        }
      });      
    }

    
  //   m(){
  //     this.data = this.navCtrl.getActive().component.name;
  //     console.log(this.navCtrl.getActive().component.name);
  
  //     if(navigator.onLine || (this.data === "OnlinePage")){
  //       this.navCtrl.push(OnlinePage);
  //     }
  
  //     if (!navigator.onLine || (this.data === "OfflinePage") ) {
  //       this.navCtrl.push(OfflinePage);
  //     }
  // }
  
  ngOnInit(){
    if(navigator.onLine){
      console.log("new-page->ng-on-init");
      console.log(Date());
//      const browser = this.iab.create('http://52.14.77.3/mgg_dash/public/admin/login/','_self',{location:'no'});
    }

    this.platform.ready().then(() => {
    document.addEventListener('backbutton', () => {
     if (this.navCtrl.canGoBack()) {
       this.platform.exitApp()
       return;
     }
     this.navCtrl.pop()
   }, false);
    });
    }

  }
  