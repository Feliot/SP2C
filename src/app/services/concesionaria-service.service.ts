import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Concesionaria } from '../models/concesionaria'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConcesionariaServiceService {
  usuariosCollection : AngularFirestoreCollection<Concesionaria>;
  usuarios: Observable<Concesionaria[]>;
  usuarioDoc: AngularFirestoreDocument<Concesionaria>;
  user: Concesionaria = {};
  listadoDeUsuarios: Concesionaria[];
  constructor(public db: AngularFirestore) {
    /* this.usuarios = this.db.collection('usuarios').valueChanges(); */
    this.usuariosCollection = this.db.collection('concesionarias');

    this.usuarios = this.usuariosCollection.snapshotChanges().pipe(
      map(actions=> actions.map(a =>{
        const data= a.payload.doc.data() as Concesionaria;
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
            const data= a.payload.doc.data() as Concesionaria;
            /* data.id = a.payload.doc.id; */
            return data;
          })
        }),)
    }
    GetUsersFiltro(  filtro: string,  campo:string){
    /*   console.log(filtro, campo); */
      //sacado de https://github.com/angular/angularfire/blob/master/docs/firestore/querying-collections.md
      return  this.usuarios = this.db.collection('concesionarias', ref => ref.where(campo, '==', filtro))
      .snapshotChanges().pipe(map(actions=>{
        return actions.map(a =>{
          const data= a.payload.doc.data() as Concesionaria;
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
          {this.listadoDeUsuarios.push(usuario as Concesionaria) ;
        }))
        , err=> reject(err)})
      }
  setUser(us :Concesionaria){
        this.user= us;
/*         console.log(this.user); */
      }

    getUser(){
        return this.user;
      }  
    getListUsers(){
      return this.listadoDeUsuarios;
    }
/*
    deleteUsuario(usuario: Usuario){
      if (confirm("¿Realmente desea eliminar el Usuario?")){
      this.usuarioDoc= this.db.doc(`usuarios/${usuario.id}`);
      console.log(this.usuarioDoc);
      this.usuarioDoc.delete();
      }
    } */
    addUsuario(usuario: Concesionaria){
       /*  this.usuariosCollection.add(usuario); */
        const param = JSON.parse(JSON.stringify(usuario));
        console.log(param);
        this.usuariosCollection.add(param);
    }
/*     updateUsuario(usuario:Usuario){
      this.usuarioDoc= this.db.doc(`usuarios/${usuario.id}`);
      this.usuarioDoc.update(usuario);
    } */

}
