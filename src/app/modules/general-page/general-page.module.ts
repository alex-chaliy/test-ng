import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralPageComponent } from './general-page/general-page.component';
import { OptionsBarModule } from 'src/app/shared/components/options-bar/options-bar.module';
import { PostCardModule } from 'src/app/shared/components/post-card/post-card.module';



@NgModule({
  declarations: [GeneralPageComponent],
  imports: [
    CommonModule,
    // ui-elements
    OptionsBarModule,
    PostCardModule
  ]
})
export class GeneralPageModule { }
