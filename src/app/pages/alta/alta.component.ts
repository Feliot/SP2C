import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage'
import { VehiculoServiceService } from '../../services/vehiculo-service.service'
import { ConcesionariaServiceService } from '../../services/concesionaria-service.service'
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Vehiculo, miVehiculo } from 'src/app/models/concesionaria';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { resolve } from 'url';
import { reject } from 'q';

@Component({
  selector: 'app-alta',
  templateUrl: './alta.component.html',
  styleUrls: ['./alta.component.css']
})
export class AltaComponent implements OnInit {
  public  tipos= ['auto', 'camioneta', 'camion'];
 public  vehiculo= new miVehiculo();
  constructor(private storage: AngularFireStorage,
    private miVehiculoServ: VehiculoServiceService, private authRout: Router,
   private uss: ConcesionariaServiceService
    ) {
     }
  urlImage: Observable<string>;
  msjerror;
  url;
  url2;
  ngOnInit() {
  }
  onSubmitAlta(){
    this.vehiculo.concesionaria = this.uss.getUser().razonsocial;
    this.urlImage.subscribe(url => {
      this.vehiculo.foto = url;
      console.log(url);
      this.miVehiculoServ.addUsuario(this.vehiculo);
      this.authRout.navigate(['/home']);
    })
  /*   this.miVehiculoServ.addUsuario(this.vehiculo);
    this.authRout.navigate(['/home']); */
     /* new Promise((resolve, reject) => {
      resolve(r=>this.miVehiculoServ.addUsuario(this.vehiculo))
    , err=> reject(err)}).then(r=> {console.log(this.vehiculo) */
     /* this.authRout.navigate(['/home'] })*/
   /*  .catch(err=>this.msjerror = err) */
 
  }
  onUpload(e){
    const id = Math.random().toString(36).substring(2);
    const file =  e.target.files[0];
    const filePath = `upload/image${id}.jpg`;
    this.vehiculo.foto = filePath;
    console.log('Archivo', e.target.files[0], "filepath",filePath);
    const ref = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);
    task.snapshotChanges().pipe(finalize( () => this.urlImage = ref.getDownloadURL())).subscribe(
    );//url imagen
    console.log('Uploaded a blob or file!');
  }
  borrarImagen(){
    this.urlImage.subscribe()
  }
}
