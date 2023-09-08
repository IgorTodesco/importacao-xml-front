import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RemocaoItemDialogComponent } from './components/dialogs/remocao-item-dialog/remocao-item-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { LoadingDialogComponent } from './components/dialogs/loading-dialog/loading-dialog.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { DragDirective } from './dragDrop.directive';

@NgModule({
  declarations: [
    AppComponent,
    RemocaoItemDialogComponent,
    LoadingDialogComponent,
    DragDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    HttpClientModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
