import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventSensor } from '../../models/event.model';
import { SocketioService } from '../../service/socketio.service';
import { NgForm } from '@angular/forms';
import { Sensor } from '../../models/sensor.motel';
import { SensorService } from '../../service/sensor.service';
import { Subscriber } from 'rxjs';

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
    this.getSensorById();
    
  }
  addEvent(f:NgForm){
    let evn=new EventSensor('',this.sensor._id,f.value.createat,f.value.value);
    this.createEvent(evn);
  }
  createEvent(ev){
      this._sensorService.saveEvent(ev).subscribe((res:any)=>{
        if(res.ok){
          this.connect();
        }
      })
  }
  getSensorById(){
    this._sensorService.getIdSensor(this.id).subscribe(res=>{
      this.sensor=res;
      this.connect();
    })
  }
  connect(){
    this._socketio.emit('listen',this.sensor._id);
    this._socketio.listen('returnList').subscribe((data)=>{
     this.listEvents=data;
    });
  }
  disconnect(){
    this._socketio.listen('disconnect').subscribe((data)=>{
      console.log(data)
    })
  }
}
