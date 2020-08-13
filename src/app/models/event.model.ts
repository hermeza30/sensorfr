export class EventSensor {
  public Id: string;
  public sensorId: string;
  public createat: string;
  public value: string;
  constructor(
    _Id: string,
    _sensorId: string,
    _createat: string,
    _value: string
  ) {
    this.Id = _Id;
    this.sensorId = _sensorId;
    this.createat = _createat;
    this.value = _value;
  }
}
