import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule, routingComponents } from './app-routing.module';
//Firebase
import { AngularFireAuthModule} from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PagesModule } from './pages/pages.module';
import { MaterialModule } from './material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavBarComponent } from './componets/nav-bar/nav-bar.component';
import { FormDatosComponent } from './componets/form-datos/form-datos.component';
import { FilaComponent } from './componets/fila/fila.component';
import { UtilmoduleModule } from './utils/utilmodule.module'


@NgModule({
  declarations: [
    AppComponent,
    AppComponent,
    NavBarComponent,
    routingComponents,
    FormDatosComponent,
    FilaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    PagesModule,
    FormsModule,
     ReactiveFormsModule,
     AngularFireAuthModule,
     AngularFireStorageModule,
     UtilmoduleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
