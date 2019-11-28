import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QrcodeComponent } from './qrcode/qrcode.component';

@NgModule({
  declarations: [ QrcodeComponent ],
  exports: [ QrcodeComponent ],
  imports: [
    CommonModule
  ],
  entryComponents: [QrcodeComponent]
})
export class MiCodemoduleModule { }
