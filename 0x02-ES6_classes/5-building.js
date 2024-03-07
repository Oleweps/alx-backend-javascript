#!/usr/bin/env node
/* eslint-disable no-unused-vars */

export default class Building {
  constructor(sqft) {
    if (
      this.evacuationWarningMessage === undefined
      && this.constructor !== Building
    ) {
      throw new Error(
        'Class extending Building must override evacuationWarningMessage',
      );
    }
    this._sqft = sqft;
  }
  
  get sqft() {
    return this._sqft;
  }

  set sqft(val) {
    this._sqft = val;
  }
}    

