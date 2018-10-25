import { Component, OnInit } from '@angular/core';

//Header component
import {HeaderComponent} from './../header/header.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  items = [
    '../../assets/img/1.png',
    '../../assets/img/3.png',
    '../../assets/img/4.png',
    '../../assets/img/5.png',
    '../../assets/img/3.png',
    '../../assets/img/1.png',
    '../../assets/img/5.png',
    '../../assets/img/4.png',
    '../../assets/img/5.png',
    '../../assets/img/3.png'
  ];

  tags = [
    'JAVA',
    'ANDROID',
    'IOS',
    'JAVASCRIPT',
    'PYTHON',
    'ANGULAR',
    'PHP',
    'GAME',
    'CSS',
    'IONIC',
    'REACT NATIVE'
  ]

	constructor() { 


	}



  //Slide categories
  slideCat(side){
     if(side=='left'){
      this.tags.push(this.tags.shift());
     }
  }

  ngOnInit() {
  }

}



