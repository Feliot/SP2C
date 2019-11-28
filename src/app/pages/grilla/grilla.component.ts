import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/services/user-service.service';
import { ConcesionariaServiceService } from 'src/app/services/concesionaria-service.service';
import { VehiculoServiceService } from 'src/app/services/vehiculo-service.service';
import { miConcesionaria, Vehiculo } from 'src/app/models/concesionaria';

@Component({
  selector: 'app-grilla',
  templateUrl: './grilla.component.html',
  styleUrls: ['./grilla.component.css']
})
export class GrillaComponent implements OnInit {
  public  Listado=[];
  private myConcesionaria = new miConcesionaria();
  constructor( private vechiculoS:VehiculoServiceService, 
    private usersS: ConcesionariaServiceService,
    private miAuth : UserServiceService) { }

  ngOnInit() {
 
    this.vechiculoS.GetUsers().subscribe(
     listado=> {this.Listado = listado}
  )}
  
  getUsuarios(){
    return this.Listado as Vehiculo[];
  }
  
}
