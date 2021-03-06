import { Injectable } from '@angular/core';
import { URL_SERVICE } from '../config/config';
import { Sensor } from '../models/sensor.motel';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import swal from 'sweetalert';
import { EventSensor } from '../models/event.model';
import { LoginService } from './login.service';
@Injectable({
  providedIn: 'root',
})
export class SensorService {
  constructor(public http: HttpClient, public _loginService:LoginService) {}

  register(sensor: Sensor) {
    let url = URL_SERVICE + '/sensor';
    url+="/?token="+this._loginService.token;
    return this.http.post(url, sensor).pipe(
      map((res: any) => {
        swal('Save', 'Sensor saved', 'success');
        return res.sensorsave;
      }),
      catchError((err) => throwError(err))
    );
  }
  get() {
    let url = URL_SERVICE + '/sensor';
    url+="/?token="+this._loginService.token;
    return this.http.get(url).pipe(
      map((res: any) => {
        return res.sensor;
      }),
      catchError((err) => throwError(err))
    );
  }
  getIdSensor(id: string) {
    let url = URL_SERVICE + '/sensor' + '/' + id;
    url+="/?token="+this._loginService.token;
    return this.http.get(url).pipe(
      map((res: any) => {
        return res.sensor;
      }),
      catchError((err) => throwError(err))
    );
  }
  updateIdSensor(id: string, sensor: Sensor) {
    let url = URL_SERVICE + '/sensor/' + id;
    url+="/?token="+this._loginService.token;
    return this.http.put(url, sensor).pipe(
      map((res: any) => {
        swal('Update', 'Sensor update', 'success');

        return res.sensor;
      }),
      catchError((err) => throwError(err))
    );
  }
  deleteIdSensor(id: string) {
    let url = URL_SERVICE + '/sensor/' + id;
    url+="/?token="+this._loginService.token;
    return this.http.delete(url).pipe(
      map((res: any) => {
        swal('Update', 'Sensor delete', 'success');

        return res.sensor;
      }),
      catchError((err) => throwError(err))
    );
  }
  saveEvent(ev: EventSensor) {
    let url = URL_SERVICE + '/event';
    url+="/?token="+this._loginService.token;
    return this.http.post(url, ev).pipe(
      map((res: any) => {
        swal('Save', 'Event saved', 'success');

        return res;
      }),catchError(err=>throwError(err))
    );
  }
}
