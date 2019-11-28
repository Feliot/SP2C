import { Component, OnInit, AfterContentInit  } from '@angular/core';
import { UserServiceService } from 'src/app/services/user-service.service';
import { Usuario, miUsuario } from 'src/app/models/usuario';
import { Vehiculo, miConcesionaria } from 'src/app/models/concesionaria';
import { VehiculoServiceService } from 'src/app/services/vehiculo-service.service';
import { ConcesionariaServiceService } from 'src/app/services/concesionaria-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterContentInit {
  private Listado=[];
  private myConcesionaria = new miConcesionaria();
  constructor( private vechiculoS:VehiculoServiceService, 
    private usersS: ConcesionariaServiceService,
    private miAuth : UserServiceService) {
    
    /* this.Listado.push(new miConcesionaria('','','')); */
   }

  ngAfterContentInit() {
    this.miAuth.getAuth()
    .subscribe(user =>{
      if(user){
    this.usersS.GetUsersFiltro(user.email, 'email')
    .subscribe(r=>{
      this.usersS.setUser(r[0]);
     this.myConcesionaria= this.usersS.getUser();
     this.vechiculoS.GetUsersFiltro(this.myConcesionaria.razonsocial, "concesionaria").subscribe(
      listado=> {this.Listado = listado;
      }
    )
    })
  }}
   /*  this.myUsuario.id = user.uid; */

)
}

/*    this.concecionaria = this.miconceS.getUser()
    console.log(this.concecionaria.razonsocial);
    this.vechiculoS.GetUsersFiltro(this.concecionaria.razonsocial, "concesionaria").subscribe(
      listado=> {this.Listado = listado;
      }
    ) */
    


 
getUsuarios(){
return this.Listado as Vehiculo[];
}
}
