import { Injectable } from '@angular/core';
import { Part } from "../../models/part.model";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class PartsService {
  private _parts: Part[] = [
    {name: 'Wheel', amount: 1},
    {name: 'Engine', amount: 1},
    {name: 'mirror', amount: 4}
  ];

  private _listChange: BehaviorSubject<any> = new BehaviorSubject<any>(this._parts);

  get parts() {
    return this._listChange.asObservable();
  }

  constructor() { }

  addParts(parts: Part[]) {
    this._parts.push(...parts);
    this._listChange.next(this._parts);
  }
}
