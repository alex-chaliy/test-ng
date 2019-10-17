import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostCardComponent } from './post-card/post-card.component';



@NgModule({
  exports: [PostCardComponent],
  declarations: [PostCardComponent],
  imports: [
    CommonModule
  ]
})
export class PostCardModule { }
