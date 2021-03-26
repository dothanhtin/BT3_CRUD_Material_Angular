import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModelComponent } from './model/model.component';
import { ModelgridComponent } from './modelgrid/modelgrid.component';
import { ModelsComponent } from './models/models.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from "./material/material.module";
import { infoService } from './infoservice';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    ModelComponent,
    ModelgridComponent,
    ModelsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [infoService,DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
