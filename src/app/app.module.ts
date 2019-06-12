import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BarComponent } from './components/bar/bar.component';
import { BarBoxComponent } from './components/bar-box/bar-box.component';

@NgModule({
  declarations: [
    AppComponent,
    BarComponent,
    BarBoxComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
