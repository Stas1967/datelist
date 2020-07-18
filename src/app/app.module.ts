import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatTableModule } from '@angular/material/table';
import { MatNativeDateModule, MatRippleModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatNativeDateModule, MatRippleModule,
    MatDatepickerModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatAutocompleteModule,
    MatExpansionModule,
    MatInputModule,
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'es-ES'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
