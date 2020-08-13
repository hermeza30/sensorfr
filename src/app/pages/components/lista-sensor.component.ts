import { Component, OnInit, Input } from '@angular/core';
import { Sensor } from '../../models/sensor.motel';
import { SensorService } from '../../service/sensor.service';
import { SocketioService } from '../../service/socketio.service';

@Component({
  selector: 'app-lista-sensor',
  templateUrl: './lista-sensor.component.html',
  styles: [
  ]
})
export class ListaSensorComponent implements OnInit {
@Input('sensors')sensors:Sensor[];
  constructor(private _sensorService:SensorService) { }

  ngOnInit(): void {
  }
  delete(id:string){
    this._sensorService.deleteIdSensor(id).subscribe();
  }

}
