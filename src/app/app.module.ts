import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import { APP_ROUTES } from './app.routes';
import { LoginComponent } from './pages/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    PagesModule,
    
    APP_ROUTES
  ],exports:[LoginComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
