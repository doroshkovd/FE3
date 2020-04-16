import { Injectable } from '@angular/core';
import { Part } from "../../models/part.model";

@Injectable({
  providedIn: 'root'
})
export class PartsService {
  private _parts: Part[] = [
    {name: 'Wheel', amount: 1},
    {name: 'Engine', amount: 1},
    {name: 'mirror', amount: 4}
  ];

  get parts() {
    return this._parts;
  }

  constructor() { }
}
