#!/usr/bin/env node
/* eslint-disable no-unused-vars */

export default class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  toString() {
    return `[${typeof this} ${this._code}]`;
  }
}
