import { Component, OnInit, Input, AfterContentInit } from '@angular/core';
import { Concesionaria } from 'src/app/models/concesionaria';

@Component({
  selector: '[app-fila]',
  templateUrl: './fila.component.html',
  styleUrls: ['./fila.component.css']
})
export class FilaComponent implements OnInit {
  @Input() item;

  constructor() { }

  ngOnInit() {
/*     console.log(this.item); */
  }

}
