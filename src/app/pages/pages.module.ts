import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PAGES_ROUTES } from './pages.routes';
import {ReactiveFormsModule,FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ComponentModule } from '../components/component.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SensorComponent } from './sensor/sensor.component';
import { ModificarSensorComponent } from './sensor/modificar-sensor.component';
import { VerSensorComponent } from './sensor/ver-sensor.component';
import { PagesComponent } from './pages.component';
@NgModule({
  declarations: [PagesComponent,SensorComponent,ModificarSensorComponent,VerSensorComponent],
  imports: [
    CommonModule,
    PAGES_ROUTES,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentModule,
    BrowserAnimationsModule,
  ],
  exports:[PagesComponent,SensorComponent,ModificarSensorComponent,VerSensorComponent]
})
export class PagesModule { }
