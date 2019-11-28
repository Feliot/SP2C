import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  AppRoutingModule } from '../app-routing.module';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFirestoreModule, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../../environments/environment';
import { AltaComponent } from './alta/alta.component';

/* import { UsuariosService } from '../services/usuarios.service'; */
/* import { MaterialModule } from '../material'; */
/* import { HomeComponent } from './home/home.component'; */


@NgModule({
  declarations: [ ],
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
  /*   MaterialModule, */
    AppRoutingModule
  ],
  providers: []
})
export class PagesModule { }
