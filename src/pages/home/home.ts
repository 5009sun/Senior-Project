import { CreateclassPage } from './../createclass/createclass';
import { MainclassPage } from './../mainclass/mainclass';
import { CreateformPage } from './../createform/createform';
import { PreviewformPage } from './../previewform/previewform';
import { WelcomePage } from './../welcome/welcome';
import { Component } from '@angular/core';
import { NavController,  App} from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  contacts = [
  { name: 'Training', phone: '081234123'}
  ,{ name: 'Support', phone: '081234123'}
  ,{ name: 'Customer Service', phone: '081234123'}
  ]


  constructor(public navCtrl: NavController, public app: App) {

  }

  showDetail(contact){
    // alert(contact.name);
    this.navCtrl.push("DetailPage",  contact);
  }

  logout(){
    const root = this.app.getRootNav();
    root.popToRoot();
  }

  preview(){
    this.navCtrl.push(PreviewformPage);
  }

  createForm(){
    this.navCtrl.push(CreateformPage);
  }

  mainClass(){
    this.navCtrl.push(MainclassPage);
  }
  createClass(){
    this.navCtrl.push(CreateclassPage);
  }
}
