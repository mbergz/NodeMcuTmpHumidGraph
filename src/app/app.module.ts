import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import {
  MatToolbarModule,
  MatCardModule,
  MatDividerModule,
  MatButtonModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatInputModule,
  MatNativeDateModule,
  MatCheckboxModule,
  MatProgressSpinnerModule
} from '@angular/material';

import { GraphComponent } from './graph/graph.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';

import { AppRoutingModule, CustomReuseStrategy } from './app-routing-module';
import { RouteReuseStrategy } from '@angular/router';

import { LogViewerComponent } from './log-viewer/log-viewer.component';
import { GraphOptionsComponent } from './graph/graph-options/graph-options.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    GraphComponent,
    GraphOptionsComponent,
    LogViewerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatDividerModule,
    MatButtonModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    MatCheckboxModule,
    MatProgressSpinnerModule
  ],
  providers: [
    {
       provide: RouteReuseStrategy, useClass: CustomReuseStrategy
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
