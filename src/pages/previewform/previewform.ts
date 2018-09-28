import { CreateitemPage } from './../createitem/createitem';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PreviewformPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-previewform',
  templateUrl: 'previewform.html',
})
export class PreviewformPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PreviewformPage');
  }

toHome(){
  this.navCtrl.push(HomePage);
}

toCreateItem(){
  this.navCtrl.push(CreateitemPage);
}

}
