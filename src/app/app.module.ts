import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PagesModule } from '@pages/pages.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from '@material-module';
import { CookieService } from 'ngx-cookie-service';

const config: SocketIoConfig = { url: 'chat-socialgeist.up.railway.app', options: {
  withCredentials: false,
} };


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    PagesModule,
    AppRoutingModule,
    SocketIoModule.forRoot(config),
    BrowserAnimationsModule,
    AngularMaterialModule
  ],
  providers: [
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
