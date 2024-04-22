import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CustomCounterComponent } from './components/custom-counter/custom-counter.component';
import { QuantityFormComponent } from './components/quantity-form/quantity-form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CustomInputComponent } from './components/custom-input/custom-input.component';
import { CustomDateInputComponent } from './components/custom-date-input/custom-date-input.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomCounterComponent,
    QuantityFormComponent,
    CustomInputComponent,
    CustomDateInputComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
