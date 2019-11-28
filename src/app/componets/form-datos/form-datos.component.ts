import { Output, ElementRef, ViewChild, AfterContentInit, OnInit} from '@angular/core';
import{ Usuario, miUsuario } from '../../models/usuario'
import{ Concesionaria, miVehiculo } from '../../models/concesionaria'
import { Component, Input} from '@angular/core';
import * as jsPDF from 'jspdf';
import * as XLSX from 'xlsx';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { QrcodeComponent } from 'src/app/utils/mi-qrcode/qrcode/qrcode.component';



@Component({
  selector: 'app-form-datos',
  templateUrl: './form-datos.component.html',
  styleUrls: ['./form-datos.component.css']
})

export class FormDatosComponent implements AfterContentInit {

@ViewChild('contenido', {static: false}) contenidoRef: ElementRef;

  public usuario = new miVehiculo('','');
/*   private posisionUid = this.arrayUsuario.indexOf('uid');
  columnsToDisplay: string[] = this.arrayUsuario.slice(0, this.posisionUid); */
 public arrayUsuario;
  constructor(public dialog: MatDialog) {
   }
   @Input() usuarios;
private text_qr: string ;
  ngAfterContentInit(){
    /* this.contenidoRef.nativeElement.focus(); */
 /*    console.log(this.usuarios); */
    //Si es un objeto
/*     Object.keys(this.usuarios); */
    this.arrayUsuario = Object.keys(this.usuario);
   
  }
  openDialog(e) {
/*     const dialogRef = this.dialog.open(QrcodeComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    }); */

    this.text_qr= e;
/*     console.log(this.text_qr); */
  }

   // exportarPDF
  public exportarPDF() {
    let doc = new jsPDF({
      orientation: 'landscape',
      unit: 'pt',
      format: 'A4'
    });
    doc.setFontSize(22);
    doc.setFontStyle('cursiva');
    doc.text('Listado de Concesionarias', 240, 30);
    let manejadorEspecial = {
      '#editor': function(element, renderer){
        return true;
      }
    }
    let content = this.contenidoRef.nativeElement;
    doc.fromHTML(content.innerHTML, 30, 35, {
     'elementHandlers': manejadorEspecial
    });
    doc.save('Concesionarias.pdf');
  }
  exportarCSV(){
    /* generate worksheet */
/* generate workbook and add the worksheet */
//Libreria https://github.com/SheetJS/sheetjs
const wb = XLSX.utils.book_new()
const ws = XLSX.utils.json_to_sheet(this.usuarios)
XLSX.utils.book_append_sheet(wb, ws, 'test')
XLSX.writeFile(wb, 'Concesionarias.csv')

  }
    
}
/* @Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'dialog-content-example-dialog.html',
})
export class DialogContentExampleDialog {} */
