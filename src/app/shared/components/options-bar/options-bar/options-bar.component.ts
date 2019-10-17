import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-options-bar',
  templateUrl: './options-bar.component.html',
  styleUrls: ['./options-bar.component.scss']
})
export class OptionsBarComponent implements OnInit {

  public rangeSliderOptions = {
    floor: 0,
    ceil: 9999,
    hideLimitLabels: true,
    hidePointerLabels: true
  };
  public rangeSliderManualRefresh: EventEmitter<void> = new EventEmitter<void>();
  public rangeSliderFrom: number = 0;
  public rangeSliderTo: number = 9999;

  constructor() { }

  ngOnInit() {
  }

}
