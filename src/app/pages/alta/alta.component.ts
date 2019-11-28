import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage'
import { UserServiceService } from '../../services/user-service.service'
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Vehiculo, miVehiculo } from 'src/app/models/concesionaria';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-alta',
  templateUrl: './alta.component.html',
  styleUrls: ['./alta.component.css']
})
export class AltaComponent implements OnInit {
  public  tipos= ['auto', 'camioneta', 'camion'];
 private vehiculo= new miVehiculo();
  constructor() { }

  ngOnInit() {
  }

}
