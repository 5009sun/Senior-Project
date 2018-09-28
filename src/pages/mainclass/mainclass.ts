import { FormhistoryPage } from './../formhistory/formhistory';
import { UseevaluationPage } from './../useevaluation/useevaluation';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MainclassPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mainclass',
  templateUrl: 'mainclass.html',
})
export class MainclassPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainclassPage');
  }

  preview(){
    this.navCtrl.push(UseevaluationPage);
  }

  chooseForm(){
    this.navCtrl.push(FormhistoryPage);
  }
}
