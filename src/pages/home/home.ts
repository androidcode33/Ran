import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {WelcomePage} from '../welcome/welcome';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  constructor(public navCtrl: NavController) {
 
  }
  welcpage(){
    this.navCtrl.push(WelcomePage);
        }

}
