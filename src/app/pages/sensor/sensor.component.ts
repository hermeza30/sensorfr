import { Component, OnInit } from '@angular/core';
import { SocketioService } from '../../service/socketio.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Sensor } from '../../models/sensor.motel';
import { SensorService } from '../../service/sensor.service';
import { Subscriber } from 'rxjs';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-sensor',
  templateUrl: './sensor.component.html',
  styles: [
  ]
})
export class SensorComponent implements OnInit {
  public form:FormGroup;
  public sensorslist:Sensor[]=[];
  constructor(private _socketio:SocketioService,public _sensorService:SensorService) { }

  ngOnInit(): void {
  //  this.connect();
   this.createForm();
   this.getSensors();
   this.connect();
  }
  createForm(){
    this.form=new FormGroup({
      name:new FormControl(),
      lat:new FormControl(),
      long:new FormControl(),
      minval:new FormControl(),
      maxval:new FormControl(),
      act:new FormControl(false)
    })
  }
  register(){
    let sensor=this.values();
         this._sensorService.register(sensor).subscribe((res)=>this.sensorslist.push(res));
  }
  getSensors(){
    this._sensorService.get().subscribe(res=>this.sensorslist=res);
  }
  values():Sensor{
    let sensor=new Sensor(
      "",
      this.form.value.name,
      this.form.value.lat,
      this.form.value.long,
      this.form.value.act,
      this.form.value.minval,
      this.form.value.maxval,
      );
    return sensor;
  }
  connect(){
    this._socketio.listen('returnListEvents').subscribe((data)=>{
      console.log(data);
    });
  }
  disconnect(){
    this._socketio.listen('disconnect').subscribe((data)=>{
      console.log(data)
    })
  }

}
