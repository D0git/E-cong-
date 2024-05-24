import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeComponent } from './employe/employe.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule  } from '@angular/forms';
import { NavComponent } from './nav/nav.component';
import { DemandesComponent } from './demandes/demandes.component';
import { JoursFerComponent } from './jours-fer/jours-fer.component';
import { FullCalendarModule } from '@fullcalendar/angular';

import { MatDialogModule } from '@angular/material/dialog';
import { FormComponent } from './form/form.component';
import { DemandeService } from 'src/service/demande-services.service';

@NgModule({
  declarations: [
    AppComponent,
    EmployeComponent,
    NavComponent,
    DemandesComponent,
    JoursFerComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FullCalendarModule,
    MatDialogModule,

  ],
  providers: [
    EmployeComponent,
    DemandeService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
