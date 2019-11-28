import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Vehiculo } from '../models/concesionaria'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VehiculoServiceService {
  usuariosCollection : AngularFirestoreCollection<Vehiculo>;
  usuarios: Observable<Vehiculo[]>;
  usuarioDoc: AngularFirestoreDocument<Vehiculo>;
  user: Vehiculo = {};
  listadoDeUsuarios: Vehiculo[];
  constructor(public db: AngularFirestore) {
    /* this.usuarios = this.db.collection('usuarios').valueChanges(); */
    this.usuariosCollection = this.db.collection('vehiculos');

    this.usuarios = this.usuariosCollection.snapshotChanges().pipe(
      map(actions=> actions.map(a =>{
        const data= a.payload.doc.data() as Vehiculo;
        /* const id = a.payload.doc.id; */
        return { ...data};
      })
    ),);
  }
  GetUsers(){
    /*   console.log(this.usuarios); */
      /* return this.usuarios = this.usuarios */
        return this.usuarios = this.usuariosCollection.snapshotChanges().pipe(map(actions=>{
          return actions.map(a =>{
            const data= a.payload.doc.data() as Vehiculo;
            /* data.id = a.payload.doc.id; */
            return data;
          })
        }),)
    }
    GetUsersFiltro(  filtro: string,  campo:string){
      console.log(filtro, campo);
      //sacado de https://github.com/angular/angularfire/blob/master/docs/firestore/querying-collections.md
      return  this.usuarios = this.db.collection('Vehiculos', ref => ref.where(campo, '==', filtro))
      .snapshotChanges().pipe(map(actions=>{
        return actions.map(a =>{
          const data= a.payload.doc.data() as Vehiculo;
   /*        data.id = a.payload.doc.id;
          console.log(data.id); */
          console.log( a.payload.doc.id);
          return data;
        })
      }),)
      }
   DevolverUsuarioFiltro(filtro: string,  campo:string){
        return new Promise((resolve, reject) => {
      resolve(this.GetUsersFiltro(filtro, campo)), err=> reject(err)})
      }


    getUsuariosSC(){
      return new Promise((resolve, reject) => {
        resolve(this.usuarios.subscribe(usuario=>
          {this.listadoDeUsuarios.push(usuario as Vehiculo) ;
        }))
        , err=> reject(err)})
      }
  setUser(us :Vehiculo){
        this.user= us;
        console.log(this.user);
      }

    getUser(){
        return this.user;
      }  
    getListUsers(){
      return this.listadoDeUsuarios;
    }
    addUsuario(usuario: Vehiculo){
        const param = JSON.parse(JSON.stringify(usuario));
        console.log(param);
        this.usuariosCollection.add(param);
    }
}
