import { Component, OnInit } from '@angular/core';
import { Logic } from 'src/assets/js/logic';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  logic: Logic = new Logic();
  step = 0;
  choosed: number;

  constructor() {}

  ngOnInit(): void {
    this.logic.start();
  }

  onChoose(which: number): void {
    this.step = which;
    this.choosed = which;
  }

}
