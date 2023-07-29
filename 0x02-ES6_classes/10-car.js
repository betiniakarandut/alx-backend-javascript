const cloneSymbol = Symbol.for('cloneSymbol'); // eslint-disable-line

export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCar() {
    const { constructor } = Object.getPrototypeOf(this);
    const clonedCar = new constructor(this._brand, this._motor, this._color);
    return clonedCar;
  }
}
