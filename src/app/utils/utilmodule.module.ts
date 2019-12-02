import { MiCaptchamoduleModule } from './mi-captcha/mi-captchamodule.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MiCodemoduleModule } from './mi-qrcode/mi-qrcodemodule.module';


@NgModule({
  declarations: [ ],
  exports: [MiCaptchamoduleModule,
    MiCodemoduleModule],
  imports: [
    CommonModule,
    MiCaptchamoduleModule,
    MiCodemoduleModule
  ]
})
export class UtilmoduleModule { }
