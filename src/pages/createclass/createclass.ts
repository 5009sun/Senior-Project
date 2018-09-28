import { MainclassPage } from "./../mainclass/mainclass";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { AlertController } from "ionic-angular";

/**
 * Generated class for the CreateclassPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-createclass",
  templateUrl: "createclass.html"
})
export class CreateclassPage {
  public event = {
    month: '1990-02-19',
    timeStarts: '07:43',
    timeEnds: '1990-02-20'
}
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alerCtrl: AlertController,

  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad CreateclassPage");
  }

  testRadioOpen: boolean;
  testRadioResult;

  doRadio() {
    let alert = this.alerCtrl.create();
    alert.setTitle("Lightsaber color");

    alert.addInput({
      type: "radio",
      label: "Blue",
      value: "blue",
      checked: true
    });

    alert.addInput({
      type: "radio",
      label: "Green",
      value: "green"
    });

    alert.addInput({
      type: "radio",
      label: "Red",
      value: "red"
    });

    alert.addInput({
      type: "radio",
      label: "Yellow",
      value: "yellow"
    });

    alert.addInput({
      type: "radio",
      label: "Purple",
      value: "purple"
    });

    alert.addInput({
      type: "radio",
      label: "White",
      value: "white"
    });

    alert.addInput({
      type: "radio",
      label: "Black",
      value: "black"
    });

    alert.addButton("Cancel");
    alert.addButton({
      text: "Ok",
      handler: data => {
        console.log("Radio data:", data);
        this.testRadioOpen = false;
        this.testRadioResult = data;
      }
    });

    alert.present().then(() => {
      this.testRadioOpen = true;
    });
  }

  next() {
    this.navCtrl.push(MainclassPage);
  }
}
