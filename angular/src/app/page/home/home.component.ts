import { Component, OnInit } from '@angular/core';

declare const Logic: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  logic;
  step = 0;
  choosed: number;

  constructor() {
    this.logic = new Logic();
  }

  ngOnInit(): void {
    this.logic.start();
  }

  onChoose(which: number): void {
    this.step = which;
    this.choosed = which;
  }

}
