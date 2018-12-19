import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

//import { HomePage } from '../home/home';

@Component({
  selector: 'page-load',
  templateUrl: 'load.html',
})
export class LoadPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log('LoadPage-->constructor');
    alert('LoadPage-->constructor');
    // this.navCtrl.setRoot(HomePage);  // Works!
  }

  ionViewDidLoad() {
    console.log('LoadPage-->ionView_Did_Load');
    alert('LoadPage-->ionView_Did_Load');
    // this.navCtrl.setRoot(HomePage);  // Works!
  }
  // Removed the if (this.auth.isPremium())... conditional for brevity
  ionViewLoaded() {
    console.log('LoadPage-->ionView_Loaded');
    alert('LoadPage-->ionView_Loaded');
    // this.navCtrl.setRoot(HomePage); // Error!  
  }
  ngOnInit() {
    console.log('LoadPage-->ngOnInit');
    alert('LoadPage-->ngOnInit');
    // this.navCtrl.setRoot(HomePage); // Error! 
  }
  ngAfterContentInit() {
    console.log('LoadPage-->ngAfter_ContentInit');
    alert('LoadPage-->ngAfter_ContentInit');
    // this.navCtrl.setRoot(HomePage); // Error! 
  }
  ngAfterViewInit() {
    console.log('LoadPage-->ngAfter_ViewInit');
    alert('LoadPage-->ngAfter_ViewInit');
    //this.navCtrl.setRoot(HomePage); // Works!
  }
  ionViewWillEnter() {
    console.log('LoadPage-->ionView_Will_Enter');
    alert('LoadPage-->ionView_Will_Enter');
    // this.navCtrl.setRoot(HomePage);  // Works!
  }
  ionViewDidEnter() {
    console.log('LoadPage-->ionView_Did_Enter');
    alert('LoadPage-->ionView_Did_Enter');
    // this.navCtrl.setRoot(HomePage);  // Works! But produces a flash of content
  }
}
