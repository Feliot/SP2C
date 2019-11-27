import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/services/user-service.service';
import { Usuario, miUsuario } from 'src/app/models/usuario';
import { Concesionaria, miConcesionaria } from 'src/app/models/concesionaria';
import { ConcesionariaServiceService } from 'src/app/services/concesionaria-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private Listado=[];
  
  constructor( private concesionS:ConcesionariaServiceService) {
    
    /* this.Listado.push(new miConcesionaria('','','')); */
   }

  ngOnInit() {
   /*  this.concesionS.getUsuariosSC().then(listado=>{
      this.Listado =  this.concesionS.getListUsers()
      console.log( this.Listado);
      return  this.Listado}
    )
    .catch(err => console.log(err)) */
    this.concesionS.GetUsers().subscribe(
      listado=> {this.Listado = listado;
      }
    )
    
  }

 
getUsuarios(){
return this.Listado as Concesionaria[];
}
}
