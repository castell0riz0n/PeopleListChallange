import { SuccessComponent } from './components/notifications/success/success.component';
import { ErrorComponent } from './components/notifications/error/error.component';
import { DataService } from './services/data.service';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatTableModule,
  MatInputModule,
  MatIconModule,
  MatFormFieldModule,
  MatCheckboxModule,
  MatCardModule,
  MatButtonModule,
  MatSortModule,
  MatSnackBarModule,
  MatProgressSpinnerModule,
  MatButtonToggleModule,
  MatTooltipModule
} from '@angular/material';


import { TableComponent } from './components/table/table.component';
import { CardComponent } from './components/card/card.component';
import { AppComponent } from './components/app/app.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    TableComponent,
    ErrorComponent,
    SuccessComponent
  ],
  imports: [
    BrowserModule,
    MatTableModule,
    MatIconModule,
    MatInputModule,
    MatCardModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatButtonModule,
    MatSortModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatButtonToggleModule,
    MatIconModule,
    MatTooltipModule,
    HttpModule,
    HttpClientModule,
    FlexLayoutModule,
    BrowserAnimationsModule
  ],
  providers: [
    DataService
  ],
  entryComponents: [
    SuccessComponent,
    ErrorComponent
],
  bootstrap: [AppComponent]
})
export class AppModule { }
