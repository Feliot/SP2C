import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/services/user-service.service';
import { Usuario, miUsuario } from 'src/app/models/usuario';
import { Vehiculo, miConcesionaria } from 'src/app/models/concesionaria';
import { VehiculoServiceService } from 'src/app/services/vehiculo-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private Listado=[];
  
  constructor( private concesionS:VehiculoServiceService) {
    
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
return this.Listado as Vehiculo[];
}
}
