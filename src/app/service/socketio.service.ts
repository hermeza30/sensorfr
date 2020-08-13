import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Subscriber, Observable } from 'rxjs';
import { URL_SERVICE } from '../config/config';
@Injectable({
  providedIn: 'root'
})
export class SocketioService {
  public socket:any;
  public url;
  constructor() { 
    this.url=URL_SERVICE;
    console.log(this.url);
    this.socket=io(this.url);
  }
  listen(evento:string){
    return new Observable((observe:Subscriber<any>)=>{
      this.socket.on(evento,(data)=>{

      });
    });
  }
  emit(evento:string,data){
    this.socket.emit(evento,data);
  }
}
