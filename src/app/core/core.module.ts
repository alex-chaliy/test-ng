import { Optional, SkipSelf, NgModule } from '@angular/core';
import { GeneralPageModule } from '../modules/general-page/general-page.module';

@NgModule({
  imports: [
    GeneralPageModule
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule has already been loaded. You should only import Core modules in the AppModule only.');
    }
  }
}
