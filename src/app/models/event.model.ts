export class EventSensor {
  public id: string;
  public sensorId: string;
  public createat: string;
  public value: string;
  constructor(
    _id: string,
    _sensorId: string,
    _createat: string,
    _value: string
  ) {
    this.id = _id;
    this.sensorId = _sensorId;
    this.createat = _createat;
    this.value = _value;
  }
}
