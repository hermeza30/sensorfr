import { Component, OnInit } from '@angular/core';
import { SensorService } from '../../service/sensor.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Sensor } from '../../models/sensor.motel';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-modificar-sensor',
  templateUrl: './modificar-sensor.component.html',
  styles: [
  ]
})
export class ModificarSensorComponent implements OnInit {
  public id:string;
  public sensor:Sensor;
  public form:FormGroup;
  constructor(public _sensorService:SensorService, private route: ActivatedRoute,
 ) { 
      this.route.params.subscribe(params => {
        this.id = params['id'];
        this.getSensorById(this.id);
     });
    }

  ngOnInit(): void {
  }
  createForm(){
    this.form=new FormGroup({
      name:new FormControl(this.sensor.name),
      lat:new FormControl(this.sensor.lat),
      long:new FormControl(this.sensor.long),
      minval:new FormControl(this.sensor.minval),
      maxval:new FormControl(this.sensor.maxval),
      act:new FormControl(this.sensor.active)
    })
  }
  getSensorById(id:string){
    this._sensorService.getIdSensor(id).subscribe(res=>{
      this.sensor=res;
      this.createForm();
    })
  }
  update(){
    this.values();
    this._sensorService.updateIdSensor(this.id,this.sensor).subscribe();
  }
  delete(){
    this.values();
    this._sensorService.deleteIdSensor(this.id).subscribe();
  }
  values(){
    this.sensor=new Sensor(
      "",
      this.form.value.name,
      this.form.value.lat,
      this.form.value.long,
      this.form.value.act,
      this.form.value.minval,
      this.form.value.maxval,
      );
  }

}
