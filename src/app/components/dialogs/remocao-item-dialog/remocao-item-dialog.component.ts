import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-remocao-item-dialog',
  templateUrl: './remocao-item-dialog.component.html',
  styleUrls: ['./remocao-item-dialog.component.css']
})
export class RemocaoItemDialogComponent {

  constructor(
    public dialog: MatDialogRef<RemocaoItemDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}
 
  onNoClick(): void {
    this.dialog.close();
  }

  deletar(): boolean {
    return true;
  }
}
