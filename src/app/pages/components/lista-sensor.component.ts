import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Sensor } from '../../models/sensor.motel';
import { SensorService } from '../../service/sensor.service';

@Component({
  selector: 'app-lista-sensor',
  templateUrl: './lista-sensor.component.html',
  styles: [
  ]
})
export class ListaSensorComponent implements OnInit {
@Input('sensors')sensors:Sensor[];
@Output('refresh') refresh:EventEmitter<boolean>=new EventEmitter();
  constructor(private _sensorService:SensorService) { }

  ngOnInit(): void {
  }
  delete(id:string){
    this._sensorService.deleteIdSensor(id).subscribe(()=>this.refresh.emit());
  }

}
