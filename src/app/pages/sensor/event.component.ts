import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventSensor } from '../../models/event.model';
import { SocketioService } from '../../service/socketio.service';
import { NgForm } from '@angular/forms';
import { Sensor } from '../../models/sensor.motel';
import { SensorService } from '../../service/sensor.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styles: [
  ]
})
export class EventComponent implements OnInit {
  public id:string;
  public sensor:Sensor;
  public listEvents:EventSensor[]=[];
  constructor(private route: ActivatedRoute,public _socketio:SocketioService, public _sensorService:SensorService) { 
    this.route.params.subscribe(params => {
      this.id = params['id'];
   });
  }

  ngOnInit(): void {
    this.connect();
    this.getSensorById();
    this._socketio.listen('')
  }
  addEvent(f:NgForm){
    console.log(f.value);
    let evn=new EventSensor('',this.sensor._id,f.value.createat,f.value.value);
    console.log(evn);
    this._socketio.emit('createEvent',evn);
  }
  createEvent(){

  }
  getSensorById(){
    this._sensorService.getIdSensor(this.id).subscribe(res=>{
      this.sensor=res;
    })
  }
  getListById(id:string){

  }
  connect(){
    this._socketio.listen('connect').subscribe((data)=>{
      console.log(data)
    })
  }
  disconnect(){
    this._socketio.listen('disconnect').subscribe((data)=>{
      console.log(data)
    })
  }
}
