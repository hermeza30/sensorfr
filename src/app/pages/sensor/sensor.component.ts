import { Component, OnInit } from '@angular/core';
import { SocketioService } from '../../service/socketio.service';

@Component({
  selector: 'app-sensor',
  templateUrl: './sensor.component.html',
  styles: [
  ]
})
export class SensorComponent implements OnInit {

  constructor(private _socketio:SocketioService) { }

  ngOnInit(): void {
   this.connect();

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
