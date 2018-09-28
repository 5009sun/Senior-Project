import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  contacts = [
    { name: 'Jirawat Punnawat', phone: '5831301009'}
    ,{ name: 'Thanakorn Auksorndit', phone: '5831301015'}

    ]

  constructor(public navCtrl: NavController) {

  }

  showDetail(contact){
    // alert(contact.name);
    this.navCtrl.push("DetailPage",  contact);
  }

}
