import { Component, OnInit, Input, AfterContentInit ,Output ,EventEmitter} from '@angular/core';
import { Concesionaria } from 'src/app/models/concesionaria';

@Component({
  selector: '[app-fila]',
  templateUrl: './fila.component.html',
  styleUrls: ['./fila.component.css']
})
export class FilaComponent implements OnInit {
  @Input() item;
  @Output() Cargar = new EventEmitter();
  


  manejadora(a) {
    // let persona = new Persona (this.name, this.surname);
    this.Cargar.emit(a);
    }

  constructor() { }

  ngOnInit() {
/*     console.log(this.item); */
  }

}
