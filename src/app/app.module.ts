import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { BusTypePipe } from './pipe/busType/bus-type.pipe';
import { ErrorMsgComponent } from './components/error-msg/error-msg.component';
import { InfoMsgComponent } from './components/info-msg/info-msg.component';

@NgModule({
  declarations: [
    AppComponent,
    BusTypePipe,
    ErrorMsgComponent,
    InfoMsgComponent,
  ],
  imports: [
    BrowserModule,
    ClarityModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
