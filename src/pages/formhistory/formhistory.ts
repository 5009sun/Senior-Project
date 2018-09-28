import { MainclassPage } from './../mainclass/mainclass';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NgSwitch, NgSwitchCase } from '@angular/common';

/**
 * Generated class for the FormhistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-formhistory',
  templateUrl: 'formhistory.html',
})
export class FormhistoryPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormhistoryPage');
  }

  chooseThisForm(){
    this.navCtrl.push(MainclassPage);
    
  }
}
