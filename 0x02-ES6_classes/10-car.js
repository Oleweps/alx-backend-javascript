#!/usr/bin/env node
/* eslint-disable no-unused-vars */

export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

//eslint-disable-next-line
  cloneCar() {
    return new this.constructor();
  }
}
