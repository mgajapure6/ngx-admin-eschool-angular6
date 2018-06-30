import { Component, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'financial-year',
  templateUrl: './financial-year.component.html',
  styleUrls: [
    './financial-year.component.css',
  ],
  encapsulation: ViewEncapsulation.None
})
export class FinancialYearComponent implements OnInit, AfterViewInit {
  dtOptions: any = {};

  constructor() { }

  ngOnInit() {
    this.dtOptions = {
      //responsive: true
    };
  }

  ngAfterViewInit(){

  }

}
