import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OptionsBarComponent } from './options-bar/options-bar.component';
import { Ng5SliderModule } from 'ng5-slider';



@NgModule({
  exports: [OptionsBarComponent],
  declarations: [OptionsBarComponent],
  imports: [
    CommonModule,
    // ui-elements 
    Ng5SliderModule
  ]
})
export class OptionsBarModule { }
