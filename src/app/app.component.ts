import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RemocaoItemDialogComponent } from './components/dialogs/remocao-item-dialog/remocao-item-dialog.component';
import { UploadServiceService } from './services/upload-service.service';
import { LoadingDialogComponent } from './components/dialogs/loading-dialog/loading-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public dialog: MatDialog, private service: UploadServiceService) { }

  title = 'importacaoXML';
  listaArquivos: File[] = [];
  formatoNegado: boolean = false;
  habilitaProcessamento: boolean = false;


  arquivoSelecionado(event: Event): void {
    const target: HTMLInputElement = event.target as HTMLInputElement;
    for (let index = 0; index < target.files?.length; index++) {
      if (target.files.item(index).type !== "text/xml") {
        this.formatoNegado = true;
      } else {
        this.listaArquivos.push(target.files.item(index));
        this.habilitaProcessamento = true;
      }
    }
  }

  filesDropped(files: File[]): void {
    for (let index = 0; index < files?.length; index++) {
      if (files.at(index).type !== "text/xml") {
        this.formatoNegado = true;
      } else {
        this.listaArquivos.push(files.at(index));
      }
    }
  }

  confirmarRemocaoItem(item: File): void {
    const dialogRef = this.dialog.open(RemocaoItemDialogComponent, {
      data: { "item": item },
      width: '350px',
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.removerItem(item);
      }
    });
  }

  removerItem(item: File): void {
    this.listaArquivos = this.listaArquivos.filter((indice) => indice !== item);
  }

  processarArquivo(arquivo: File[]): void {
    // console.log(arquivo);
    // alert(arquivo);
    //   var xml = new XMLHttpRequest();
    //   xml.open('GET', 'xml.xml', false);
    //   xml.s
    //   });
    const dialogRef = this.dialog.open(LoadingDialogComponent, {
      width: '300px',
    });

    this.service.uploadFile(this.listaArquivos).subscribe({
      next: (reposta) => {
        console.log(reposta)
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        this.listaArquivos = [];
        dialogRef.close();
        this.formatoNegado = false;
      }
    });
  }
}
