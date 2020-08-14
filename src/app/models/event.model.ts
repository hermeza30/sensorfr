export class EventSensor {
  public id: string;
  public sensorid: string;
  public createat: string;
  public value: string;
  constructor(
    _id: string,
    _sensorid: string,
    _createat: string,
    _value: string
  ) {
    this.id = _id;
    this.sensorid = _sensorid;
    this.createat = _createat;
    this.value = _value;
  }
}
