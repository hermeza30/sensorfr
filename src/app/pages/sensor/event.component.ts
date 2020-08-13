import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventSensor } from '../../models/event.model';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styles: [
  ]
})
export class EventComponent implements OnInit {
  public id:string;
  public listEvents:EventSensor[]=[];
  constructor(private route: ActivatedRoute) { 
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.getListById(this.id);
   });
  }

  ngOnInit(): void {
  }
  addEvent(){

  }
  
  getListById(id:string){

  }
}
