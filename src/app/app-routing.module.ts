import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GeneralPageComponent } from './modules/general-page/general-page/general-page.component';


const routes: Routes = [
  { path: '', redirectTo: 'general', pathMatch: 'full' },
  { path: 'general', component: GeneralPageComponent },
  { path: '**', redirectTo: 'general' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
