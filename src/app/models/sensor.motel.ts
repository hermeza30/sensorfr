export class Sensor{

    public _id:string;
    public name:string;
    public lat:number;
    public long:number;
    public active:boolean;
    public minval:number;
    public maxval:number;
    constructor(_id:string,_name:string,_lat:number,_long:number,_active:boolean,_minval:number,_maxval:number
    ){
this._id=_id,
this.name=_name,
this.lat=_lat,
this.long=_long,
this.active=_active,
this.minval=_minval,
this.maxval=_maxval
    }

}